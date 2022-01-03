import validator from './validator.js';

/* Llamando al DOM*/

const btnForm = document.getElementById("sendForm");
const form = document.getElementById("#formValidation");
const monthValid = document.getElementById("#monthSelect");


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
const str = (/\d(?=\d{4})/g, "🐾");

inputNumber.addEventListener('input', function() {
    inputNumber.value = inputNumber.value.replace(onlyNum, str, '');
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
}
