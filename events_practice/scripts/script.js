let formMain = document.createElement("form");
document.body.prepend(formMain);

let textArea = document.createElement("textarea");
formMain.prepend(textArea);
textArea.id = "txt";

let btn = document.createElement("input");
btn.type = "submit";
btn.value = "Ok";

formMain.append(btn);


function formSubmit(e){
	let msg = document.getElementById("txt").value;
	if(msg.length < 1) document.write("Text Area is Empty")
		else document.write(msg);
	e.preventDefault();
}

formMain.addEventListener("submit", formSubmit, false);