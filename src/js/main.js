const d = document
  //id form
let form = d.getElementById('formValidation');
const btnForm = document.getElementById("sendForm");

form.addEventListener('click', function isValid(e){
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
