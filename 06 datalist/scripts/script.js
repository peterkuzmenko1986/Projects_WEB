let inp = document.createElement("input");
inp.setAttribute("list", "dlst");
document.body.prepend(inp);

let dlist = document.createElement("datalist");
dlist.id = "dlst";

let option1 = document.createElement("option");
option1.value = "Kiev";
let option2 = document.createElement("option");
option2.value = "Chernigiv";
let option3 = document.createElement("option");
option3.value = "Lviv";
dlist.append(option1, option2, option3);

inp.append(dlist);