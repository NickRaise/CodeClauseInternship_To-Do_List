let inputs = document.querySelector("#inp")
let text = document.querySelector(".text")
console.log("hello")
function Add() {
    if(inputs.value == '') {
        alert("Cant't enter empty tasks.😢")
    }
    else {
        let newElement = document.createElement("ul");
        newElement.innerHTML = `${inputs.value} <i class="fa-solid fa-trash" style="color: #ffffff;"></i>`;
        text.appendChild(newElement);
        inputs.value = "";
        newElement.querySelector("i").addEventListener("click", remove);
        function remove() {
            newElement.remove();
        }
    }
}