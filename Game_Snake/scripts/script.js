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


let elems = new Array(n);
let line;
for(let i=0; i<n; i++){
    elems[i] = new Array(n);
    line = document.createElement("div");
    line.classList.add("line");
    mainDiv.append(line);

    for(let j=0;j<n; j++){
        elems[i][j] = document.createElement("div");
        elems[i][j].classList.add("pixel");
        line.append(elems[i][j]);
    }
}

let calcWidth = width/n - 2*padding + "rem";
document.styleSheets[1].insertRule(`.pixel{width:${calcWidth}; height: ${calcWidth}}`);

