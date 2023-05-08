let xxx = new XMLHttpRequest();
xxx.open("GET", "https://swapi.dev/api/people/", true);
xxx.send();
console.log(xxx.responseText);