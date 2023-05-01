let inp = document.createElement("input");
document.body.prepend(inp);

inp.addEventListener("keypress", funcKeyPs);
inp.addEventListener("input", funcKeyPs);

function funcKeyPs(e){
    if(inp.value.length <4) {
        inp.style.borderColor = "green"
        inp.style.color = "black";
    }
    else {
           inp.style.borderColor = "#e50035";
           inp.style.color = "red";
    }
    
    if(inp.value.length > 6) e.preventDefault();
}