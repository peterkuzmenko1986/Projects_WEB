let calcBody = document.createElement("div");
calcBody.classList.add("calcBody");
document.body.prepend(calcBody);

let viewer = document.createElement("div");
viewer.classList.add("viewer");
calcBody.append(viewer);

let memConteiner = document.createElement("div");
memConteiner.classList.add("btnsLine");
calcBody.append(memConteiner);

let memBtn = document.createElement("button");
memBtn.classList.add("memBtn");
memBtn.innerText = "MEM";
memConteiner.append(memBtn);

let memMin = document.createElement("button");
memMin.classList.add("memBtn");
memMin.innerText = "- P";
memConteiner.append(memMin);

let memPls = document.createElement("button");
memPls.classList.add("memBtn");
memPls.innerText = "+ P";
memConteiner.append(memPls);

let resetBtn = document.createElement("button");
resetBtn.classList.add("memBtn");
resetBtn.innerText = "RESET";
resetBtn.classList.add("resetBtn");
memConteiner.append(resetBtn);


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
btnDivide.classList.add("resetBtn");
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
btnMult.classList.add("resetBtn");
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
btnMin.classList.add("resetBtn");
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
btnIs.classList.add("resetBtn");
btnIs.innerText = "=";
line0.append(btnIs);


//select Buff1 --- true
//select Buff2 --- false
let buffSelect = true;

let buff1 = 0, buff2 = 0, operation;
let memBuff, memBuffPls, memBuffMin;

let viewerBuff = 0;
viewer.innerText = viewerBuff;


calcBody.addEventListener("click", funcBtnClk, false);

function funcIs(){
	switch(operation){
	case "mult":
		viewerBuff = buff1 * buff2;
		break;
	case "divide":
		viewerBuff = buff1 / buff2;
		break;
	case "plus":
		viewerBuff = buff1 + buff2;
		break;
	case "minus":
		viewerBuff = buff1 - buff2;
	}
}

function addToBuff(param){
	if(buffSelect == true)
		{
			buff1 += param.toString();
			buff1 = parseFloat(buff1);
			viewerBuff = buff1;
		}
	else
		{
			buff2 += param.toString();
			buff2 = parseFloat(buff2);
			viewerBuff = buff2;
		}
}

function funcBtnClk(e){
	switch(e.target){
	case btnIs:
		funcIs();
		break;

	case btnMult:
		operation = "mult";
		buffSelect = false;
		break;
	case btnDivide:
		operation = "divide";
		buffSelect = false;
		break;
	case btnPlus:
		operation = "plus";
		buffSelect = false;
		break;
	case btnMin:
		operation = "minus";
		buffSelect = false;
		break;


	case memBtn:
		break;
	case memMin:
		break;
	case memPls:
		break;
	case resetBtn:
		break;


	case btnPoint:
		if(operation !="complite") 
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
