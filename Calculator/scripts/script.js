let calcBody = document.createElement("div");
calcBody.classList.add("calcBody");
document.body.prepend(calcBody);

let viewer = document.createElement("div");
viewer.classList.add("viewer");
calcBody.append(viewer);

let memConteiner = document.createElement("div");
memConteiner.classList.add("btnsLine");
calcBody.append(memConteiner);

let memRead = document.createElement("button");
memRead.classList.add("memBtn");
memRead.innerText = "MR";
memConteiner.append(memRead);

let memWrite = document.createElement("button");
memWrite.classList.add("memBtn");
memWrite.innerText = "MW";
memConteiner.append(memWrite);

let memClear = document.createElement("button");
memClear.classList.add("memBtn");
memClear.innerText = "MC";
memConteiner.append(memClear);

let btnReset = document.createElement("button");
btnReset.classList.add("memBtn");
btnReset.innerText = "RESET";
btnReset.classList.add("btnReset");
memConteiner.append(btnReset);


let line789 = document.createElement("div");
line789.classList.add("btnsLine");
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
btnDivide.classList.add("btnReset");
btnDivide.innerText = "/";
line789.append(btnDivide);



let line456 = document.createElement("div");
line456.classList.add("btnsLine");
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
btnMult.classList.add("btnReset");
btnMult.innerText = "*";
line456.append(btnMult);


let line123 = document.createElement("div");
line123.classList.add("btnsLine");
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
btnMin.classList.add("btnReset");
btnMin.innerText = "-";
line123.append(btnMin);



let line0 = document.createElement("div");
line0.classList.add("btnsLine");
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
btnIs.classList.add("btnReset");
btnIs.innerText = "=";
line0.append(btnIs);


let	param1 = 0, param2 = 0;
let p1Point = false;
let p2Point = false;

let	operation = false;


let memValue = 0;

let viewerBuff = 0;
viewer.innerText = viewerBuff;



calcBody.addEventListener("click", funcBtnClk, false);

function funcIs(){
	switch(operation){
	case "mult":
		viewerBuff = param1 * param2;
		break;
	case "divide":
		viewerBuff = param1 / param2;
		break;
	case "plus":
		viewerBuff = param1 + param2;
		break;
	case "minus":
		viewerBuff = param1 - param2;
	}

	viewerBuff = viewerBuff.toFixed(10);
	viewerBuff = parseFloat(viewerBuff);

	param1 = viewerBuff;
	p2Point = false;
	param2 = 0;
}

function addToBuff(param){
	if(operation == false)
		{
			if((p1Point == false) && (param == ".")){
				param1 += param.toString();
				p1Point = true;
			} else if((p1Point == true) && (param == ".")){

			} else{
				param1 += param.toString();
				if(param != "0") param1 = +param1;
			}
			viewerBuff = param1;
		}
	else
		{
			if((p2Point == false) && (param == ".")){
				param2 += param.toString();
				p2Point = true;
			} else if((p2Point == true) && (param == ".")){

			} else{
				param2 += param.toString();
				if(param != "0") param2 = +param2;
			}
			viewerBuff = param2;
		}
}

function funcReset(){
	operation = false;
	param1 = 0;
	param2 = 0;
	viewerBuff = 0;

	p1Point = false;
	p2Point = false;
}

function funcMemRead(){
	if(operation == false) {
		param1 = memValue;
		viewerBuff = param1;
	}
	else {
		param2 = memValue;
		viewerBuff = param2;
	}
}

function funcBtnClk(e){
	switch(e.target){
	case btnIs:
		funcIs();
		break;

	case btnMult:
		operation = "mult";
		break;
	case btnDivide:
		operation = "divide";
		break;
	case btnPlus:
		operation = "plus";
		break;
	case btnMin:
		operation = "minus";
		break;


	case memRead:
		funcMemRead();
		break;
	case memWrite:
		memValue = viewerBuff;
		break;
	case memClear:
		memValue = 0;
		break;
	case btnReset:
		funcReset();
		break;


	case btnPoint:
		addToBuff(".");
		break;

	case btn0:
		addToBuff(0);
		break;
	case btn1:
		addToBuff(1);
		break;
	case btn2:
		addToBuff(2);
		break;
	case btn3:
		addToBuff(3);
		break;
	case btn4:
		addToBuff(4);
		break;
	case btn5:
		addToBuff(5);
		break;
	case btn6:
		addToBuff(6);
		break;
	case btn7:
		addToBuff(7);
		break;
	case btn8:
		addToBuff(8);
		break;
	case btn9:
		addToBuff(9);
		break;
	}

	viewer.innerText = viewerBuff;
}
