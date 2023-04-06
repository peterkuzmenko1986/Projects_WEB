let mainInput = document.createElement("input");
document.body.prepend(mainInput);

function funcKeyPress(e){
	mainInput.value += "*";
	console.log(String.fromCharCode(e.charCode));
	e.preventDefault();
}

mainInput.addEventListener("keypress", funcKeyPress, false);