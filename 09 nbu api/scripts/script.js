window.addEventListener("DOMContentLoaded",()=>{
    const jsonObj = new XMLHttpRequest();
    jsonObj.open("GET", "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json")
    jsonObj.send();
    
    jsonObj.onreadystatechange = funcGET;
    
    function funcGET(){
        if(jsonObj.status<400 && jsonObj.readyState==4 ){
            const respObj = JSON.parse(jsonObj.responseText);
            let tr, td1, td2, td3;

            for(let i=0; i<respObj.length; i++){
                tr = document.createElement("tr");
                td1 = document.createElement("td");
                td2 = document.createElement("td");
                td3 = document.createElement("td");

                td1.innerText = respObj[i].cc;
                td2.innerText = respObj[i].txt;
                td3.innerText = respObj[i].rate;
                
                tr.append(td1, td2, td3);
                document.querySelector("tbody").append(tr);
            }
        }
    }
})