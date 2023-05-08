let width = 30;
let n = 10;
let padding = 0.5;
padding *= width/100;


let mainDiv = document.createElement("div");
mainDiv.classList.add("mainDiv");

mainDiv.style.width = width + "rem";
mainDiv.style.height = mainDiv.style.width;
document.styleSheets[1].insertRule(`.mainDiv{padding: ${padding}rem; }`);
document.body.prepend(mainDiv);


let elem = new Array(n);
let line;
for(let i=0; i<n; i++){
    elem[i] = new Array(n);
    line = document.createElement("div");
    line.classList.add("line");
    mainDiv.append(line);

    for(let j=0;j<n; j++){
        elem[i][j] = document.createElement("div");
        elem[i][j].classList.add("pixel");
        line.append(elem[i][j]);
    }
}

let calcWidth = width/n - 2*padding + "rem";
document.styleSheets[1].insertRule(`.pixel{width:${calcWidth}; height: ${calcWidth}}`);

setInterval(funcInterval, 1000);

let isActive = false;
let isPosChanged = false;

let posX = Math.floor( (n-1)/2);
let posY = n-1;
function funcInterval(){
    isPosChanged = false;
    isActive = !isActive;
    elem[posY][posX].classList.toggle("grey");
}

document.addEventListener("keydown", funcKey, false);

function funcKey(e){
    if(!isActive && !isPosChanged){
        switch(e.code){
            case "ArrowUp":
                if(posY>0) posY--;
            break;
            case "ArrowDown":
                if(posY<(n-1)) posY++;
            break;
            case "ArrowLeft":
                if(posX>0) posX--;
            break;
            case "ArrowRight":
                if(posX<(n-1)) posX++;
            break;
        }
        isPosChanged = true;
    }
}