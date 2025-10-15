const change = document.getElementById("change")

const surnameDiv = document.getElementById("surname");
const nameDiv = document.getElementById("name");
const lastnameDiv = document.getElementById("lastname");
const sexDiv = document.getElementById("sex");
const cityDiv = document.getElementById("city");

function change_all(){
    const фамилия = surnameDiv.innerText.trim();

    if (фамилия === "Petrutsa") {
    surnameDiv.innerText = "Петруца";
    nameDiv.innerText = "Мария";
    lastnameDiv.innerText = "Романовна";
    sexDiv.innerText = "жен";
    cityDiv.innerText = "Москва";
    } 

    else 
    

    if (фамилия === "Петруца") {
    surnameDiv.innerText = "Petrutsa";
    nameDiv.innerText = "Maria";
    lastnameDiv.innerText = "Romanovna";
    sexDiv.innerText = "female";
    cityDiv.innerText = "Moscow";

    
        }
    }


change.addEventListener("click", change_all)