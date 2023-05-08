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

setInterval(funcInterval, 500);

// 1 - Right
// 2 - Up
// 3 - Left
// 4 - Down
let prevDirect = 2;


let isActive = false;
let isPosChanged = false;

let posX = Math.floor( (n-1)/2);
let posY = n-1;

let newPosX = posX;
let newPosY = posY;

function funcInterval(){
    isPosChanged = false;
    isActive = !isActive;
    
    elem[posY][posX].classList.remove("grey");

    
    if(isActive){
        switch(prevDirect){
            case 1:
                if(posX<(n-1)) newPosX++;
                break;
                case 2:
                if(posY>0) newPosY--;
            break;
            case 3:
                if(posX>0) newPosX--;
            break;
            case 4:
                if(posY<(n-1)) newPosY++;
                break;
        }
    }
      
    
    posX = newPosX;
    posY = newPosY;
    
    elem[posY][posX].classList.add("grey");
}

document.addEventListener("keydown", funcKey, false);

function funcKey(e){
    if(isActive && !isPosChanged){
        switch(e.code){
            case "ArrowUp":
                if(posY>0) newPosY--;
                prevDirect = 2;
            break;
            case "ArrowDown":
                if(posY<(n-1)) newPosY++;
                prevDirect = 4;
            break;
            case "ArrowLeft":
                if(posX>0) newPosX--;
                prevDirect = 3;
            break;
            case "ArrowRight":
                if(posX<(n-1)) newPosX++;
                prevDirect = 1;
            break;
        }
        isPosChanged = true;
    }
}