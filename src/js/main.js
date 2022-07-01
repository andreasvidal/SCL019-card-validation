//import {validator} from './carValidation.js'

  const d = document
  //id form
let form = d.getElementById('formValidation')
//id input number
let cardNumber = d.getElementById('inputNumber')

form.addEventListener('submit', function isValid(e){
  e.preventDefault()
  let userName = d.getElementById('inputNameUser').value
  let userCardNumber = d.getElementById('inputNumber').value
  console.log(userName)
  if(userName === "" || userCardNumber === ""){
    userName = false;
    d.getElementById('nameError').setAttribute('id','nameError');
    d.getElementById('numberError').setAttribute('id','numberError')
    d.getElementById('nameError').innerHTML = 'Ingrese su nombre'
    d.getElementById('numberError').innerHTML = 'Ingrese su numero'
  }else if (userName !== ""){
    d.getElementById('nameError').removeAttribute('id')
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

