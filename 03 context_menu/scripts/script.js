let btn = document.createElement("div");
btn.classList.add("btn");
document.body.prepend(btn);

let menu = document.createElement("div");
menu.classList.add("menu");
document.body.prepend(menu);

let menu1 = document.createElement("div");
menu1.classList.add("menuElem");
menu.append(menu1);

let menu2 = document.createElement('div');
menu2.classList.add("menuElem");
menu.append(menu2);

let menu3 = document.createElement("div");
menu3.classList.add("menuElem");
menu.append(menu3);


btn.addEventListener("contextmenu", funcContext);

function funcContext(e){

	menu.style.left = `${e.clientX}px`;
	menu.style.top = `${e.clientY}px`;

	menu.style.display = "flex";

	e.preventDefault();
}

window.addEventListener("click", funcDef, true);

function funcDef(e){
	menu.style.display = "none";
}