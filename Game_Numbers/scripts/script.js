let wrapper = document.createElement("div");
wrapper.classList.add("wrapper");
document.body.preppend(wrapper);

let nElem = 3;

let lineDiv = new Array(nElem);
let arrElems = new Array(nElem);

//Создание массива случайных неповторяющихся значени

let arrRand = new Array(nElem * nElem);

let testRand = 0;
let isDuplicate = false;
for(let i = 0; i<arrRand.length; i++){
    do{
        isDuplicate = false;
        testRand = Math.floor(Math.random()*(nElem*nElem*2))+1;
        // testRand = Math.random(time.getTime())*(nElem*nElem)+1;
        // debugger;
        for(let j = i; j>=0; j--){
            if(testRand == arrRand[j]){
                isDuplicate = true;
                break;
            }
        }

    }while(isDuplicate == true);
    arrRand[i] = testRand;
}

let arrSort = arrRand.concat();
arrSort.sort((a,b) =>(a-b));


let cnt = 0;

for(let i = 0; i<nElem; i++){
    //Создание Div контейнера для строки из элементов
    lineDiv[i] = document.createElement("div");
    lineDiv[i].classList.add("lineDiv");

    //Добавить Div контейнер основному контейнеру
    wrapper.append(lineDiv[i]);

    //Создание массива-строки из элементов
    arrElems[i] = new Array(nElem);

    //Заполнение массива-строки
    for(let j = 0; j<nElem; j++){
        arrElems[i][j] = document.createElement("div");
        arrElems[i][j].classList.add("arrElem");

        //Добавить элемент в строку
        lineDiv[i].append(arrElems[i][j]);

        // arrElems[i][j].innerText = "OK";
        arrElems[i][j].innerText = arrRand[cnt];
        cnt++;
    }
}

let allBTNs = document.getElementsByClassName("arrElem");
let arrResult = new Array(nElem*nElem);
cnt = 0;


function btnClick(ev){
    // console.log("ok");
    ev.target.style.backgroundColor = "green";
    arrResult[cnt] = ev.target.innerText;
    cnt++
    // debugger;

    if(cnt>=(nElem*nElem)){
        isResultCorrect();
    }
}

wrapper.addEventListener("click", btnClick, true);


//Функция сравнения двух массивов
function isResultCorrect(){

    let res = arrResult.toString();
    let sort = arrSort.toString();

    if(sort === res) {
        alert("Правильно.  Молодец !!!");
        location.reload();
    }
        else {
            alert("Не совпадает");
            location.reload();
        }
    // debugger;
}