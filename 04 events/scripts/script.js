let inp = document.createElement("input");
document.body.prepend(inp);

inp.addEventListener("blur", funcInpBlur);

let par = document.createElement("p");
document.querySelector("input").after( par);

function funcInpBlur(e){
	par.innerText = inp.value;
	par.style.display = "block";
	inp.value = "";
}