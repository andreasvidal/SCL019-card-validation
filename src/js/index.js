/*import validator from '../js/validator.js';

//Llamando al DOM

const btnForm = document.getElementById("sendForm");
const form = document.getElementById("#formValidation");
btnForm.addEventListener('click', function(e) {
    e.preventDefault();
    let creditCardNumber = document.getElementById('inputNumber').value;
    let maskified = validator.maskify(creditCardNumber);
    if (creditCardNumber === "") {
        return document.getElementById("print").innerHTML = "Reingrese su número de tarjeta sin espacios ni carácteres especiales";
    } else {
        return document.getElementById("print").innerHTML = "Tu tarjeta N° " + maskified + " es válida";
    }
})


// inputName solo letras, inputCcv y inputNumber  solo numeros
let inputNumber = document.getElementById('inputNumber');
let inputName = document.getElementById('inputNameUser');
let inputCcv = document.getElementById('inputCcv');

const onlyNum = /[^0-9]/g;
const onlypLet = /[^a-zA-ZÑñáéíóúÁÉÍÓÚ\s]*$/g;
inputNumber.addEventListener('input', function() {
    inputNumber.value = inputNumber.value.replace(onlyNum, '');
});
inputName.addEventListener('input', function() {
    inputName.value = inputName.value.replace(onlypLet, '');
});
inputCcv.addEventListener('input', function() {
    inputCcv.value = inputCcv.value.replace(onlyNum, '');
});

// mes y años
for (let i = 1; i <= 12; i++) {
    let optionDate = document.createElement('option');
    optionDate.value = i;
    optionDate.innerText = i;
    form.monthSelect.appendChild(optionDate);
}

// * Select del año generado dinamicamente.
const yearActual = new Date().getFullYear();
for (let i = yearActual; i <= yearActual + 8; i++) {
    let optionDate = document.createElement('option');
    optionDate.value = i;
    optionDate.innerText = i;
    optionDate.selectYear.appendChild(optionDate);
}*/


const d = document
  //id form
let form = d.getElementById('formValidation')

form.addEventListener('mouseover', function isValid(e){
  e.preventDefault()
  let userName = d.getElementById('inputNameUser').value
  let userCardNumber = d.getElementById('inputNumber').value
  let ccvCardNumber = d.getElementById('inputCcv').value
  console.log(userName, userCardNumber,  ccvCardNumber)
  if(userName === "" || userCardNumber === "" || ccvCardNumber === ""){
    d.getElementById('nameError').setAttribute('id','nameError');
    d.getElementById('numberError').setAttribute('id','numberError')
    d.getElementById('inputCcv').setAttribute('id', 'inputCcv')
    d.getElementById('nameError').innerHTML = 'Ingrese su nombre'
    d.getElementById('numberError').innerHTML = 'Ingrese su numero de tarjeta'
    d.getElementById('ccvError').innerHTML = 'Ingrese su ccv'
  }
})



/*btnSend.addEventListener('click', (e) => {
    e.preventDefault();
    //API de validación de restricciones HTML5
    inputNameUser.setCustomValidity("");
    inputNameUser.checkValidity();
    console.log(inputNameUser.checkValidity());
    let errorText = nameError.style.display
    if (errorText === 'block') {
        nameError.style.display = 'none'
        console.log(errorText)
    } else {
        nameError.style.display = 'block'
            //cambia el mensade el boton
        btnSend.innerHTML = 'Send ok'
    }
})*/
