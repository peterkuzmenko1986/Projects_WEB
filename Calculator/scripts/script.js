let calcBody = document.createElement("div");
calcBody.classList.add("calcBody");
document.body.prepend(calcBody);

let viewer = document.createElement("div");
viewer.classList.add("viewer");
calcBody.append(viewer);

let memConteiner = document.createElement("div");
memConteiner.classList.add("memConteiner");
calcBody.append(memConteiner);

let memBtn = document.createElement("button");
memBtn.classList.add("memBtn");
memBtn.innerText = "MEM";
memConteiner.append(memBtn);

let memMin = document.createElement("button");
// memMin.classList.add("memMin");
memMin.classList.add("memBtn");
memMin.innerText = "- P";
memConteiner.append(memMin);

let memPls = document.createElement("button");
// memPls.classList.add("memPls");
memPls.classList.add("memBtn");
memPls.innerText = "+ P";
memConteiner.append(memPls);

let resetBtn = document.createElement("button");
resetBtn.classList.add("memBtn");
resetBtn.innerText = "RESET";
resetBtn.classList.add("resetBtn");
memConteiner.append(resetBtn);


let line789 = document.createElement("div");
line789.classList.add("memConteiner");
calcBody.append(line789);

let btn7 = document.createElement("button");
btn7.classList.add("memBtn");
btn7.innerText = "7";
line789.append(btn7);

let btn8 = document.createElement("button");
btn8.classList.add("memBtn");
btn8.innerText = "8";
line789.append(btn8);

let btn9 = document.createElement("button");
btn9.classList.add("memBtn");
btn9.innerText = "9";
line789.append(btn9);

let btnDivide = document.createElement("button");
btnDivide.classList.add("memBtn");
btnDivide.classList.add("resetBtn");
btnDivide.innerText = "/";
line789.append(btnDivide);



let line456 = document.createElement("div");
line456.classList.add("memConteiner");
calcBody.append(line456);

let btn4 = document.createElement("button");
btn4.classList.add("memBtn");
btn4.innerText = "4";
line456.append(btn4);

let btn5 = document.createElement("button");
btn5.classList.add("memBtn");
btn5.innerText = "5";
line456.append(btn5);

let btn6 = document.createElement("button");
btn6.classList.add("memBtn");
btn6.innerText = "6";
line456.append(btn6);

let btnMult = document.createElement("button");
btnMult.classList.add("memBtn");
btnMult.classList.add("resetBtn");
btnMult.innerText = "*";
line456.append(btnMult);


let line123 = document.createElement("div");
line123.classList.add("memConteiner");
calcBody.append(line123);

let btn1 = document.createElement("button");
btn1.classList.add("memBtn");
btn1.innerText = "1";
line123.append(btn1);

let btn2 = document.createElement("button");
btn2.classList.add("memBtn");
btn2.innerText = "2";
line123.append(btn2);

let btn3 = document.createElement("button");
btn3.classList.add("memBtn");
btn3.innerText = "3";
line123.append(btn3);

let btnMin = document.createElement("button");
btnMin.classList.add("memBtn");
btnMin.classList.add("resetBtn");
btnMin.innerText = "-";
line123.append(btnMin);



let line0 = document.createElement("div");
line0.classList.add("memConteiner");
calcBody.append(line0);

let btn0 = document.createElement("button");
btn0.classList.add("memBtn");
btn0.innerText = "0";
line0.append(btn0);

let btnPoint = document.createElement("button");
btnPoint.classList.add("memBtn");
btnPoint.innerText = ".";
line0.append(btnPoint);

let btnPlus = document.createElement("button");
btnPlus.classList.add("memBtn");
btnPlus.innerText = "+";
line0.append(btnPlus);

let btnIs = document.createElement("button");
btnIs.classList.add("memBtn");
btnIs.classList.add("resetBtn");
btnIs.innerText = "=";
line0.append(btnIs);