//import {validator} from './carValidation.js'
const d = document;
let form = document.getElementById("#formValidation");
let btnSend = document.getElementById("sendForm");
let inputNumber = d.querySelector("#inputNumber").value;
let inputNameUser = d.querySelector("#inputNameUser").value;
let inputCcv = d.querySelector("#inputCcv").value;

btnSend.addEventListener('click', function(e){
  e.preventDefault()
  if (inputNumber === "") {
    d.querySelector("#numberError").textContent = 'Debes ingresar tu numero de tarjeta';
  }
  if(inputNameUser === ""){
    d.querySelector("#nameError").textContent = 'Debe ingresar tu nombre';
  }
  if(inputCcv === ""){
    d.querySelector("#ccvError").textContent = 'Ingresa tu numero de ccv';
  }
}) ;

btnSend.addEventListener('click', function(e){
  e.preventDefault
  if(inputNumber > 0){
     d.querySelector("#numberOk").textContent = 'Ok!';
  }
  if(inputCcv > 0){
    d.querySelector("#ccvOk").textContent = 'Ok!';
  }
  if(!inputNameUser === ""){
    d.querySelector("#nameOk").textContent = 'Ok!';
  }
}
)


const inputValidValues = () => {
  const onlypLet = /[^a-zA-ZÑñáéíóúÁÉÍÓÚ\s]*$/g;
  if(!inputNameUser === onlypLet ){
    d.querySelector("#numberNull").innerHTML = inputNameUser;
     inputNameUser.value = inputNameUser.value.replace(onlyNum, '');
  }
  const onlyNum = /[^0-9]/g;
  if(inputNumber || inputCcv === onlyNum){
     inputCcv.value = inputCcv.value.replace(onlyNum, '');
  }
  return inputValidValues
}
btnSend.addEventListener('submit', inputValidValues())
