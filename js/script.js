const nome = document.querySelectorAll(".name-input");
const cpf = document.querySelectorAll('.cpf');
const tel = document.querySelectorAll('.tel');
const estado = document.querySelectorAll('.state');
const cidade = document.querySelectorAll('.city');
const button = document.querySelector('.next');
const error = document.querySelectorAll('.error');
var ct = document.getElementById('ct').value;



xhttp.open("GET", ct, false);

function guardar ( ){
button.addEventListener('click', () => {
    const key = nome.value;
    const key1 = cpf.value;
    const key2 = tel.value;


if(key){
    localStorage.setItem("listas",JSON.stringify (nome , cpf , tel))
}
    
})}


console.log('teste')