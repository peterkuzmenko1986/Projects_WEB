let btn = document.getElementById("btn");
btn.addEventListener("click",funcGET);

function funcGET(){
	const xxx = new XMLHttpRequest();
	xxx.open("GET","https://jsonplaceholder.typicode.com/users");
	xxx.send();

	xxx.onreadystatechange = ()=>{
		if(xxx.readyState == 4 && xxx.status == 200) btn.nextElementSibling.innerText = xxx.responseText
	}
}

