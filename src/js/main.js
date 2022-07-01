//import {validator} from './carValidation.js'

  const d = document
  //id form
let form = d.getElementById('formValidation')
//id input number
let cardNumber = d.getElementById('inputNumber')

form.addEventListener('submit', function isValid(e){
  e.preventDefault()
  let userName = d.getElementById('inputNameUser').value
  console.log(userName)
  if(userName === ""){
    userName = false;
    d.getElementById('nameError').setAttribute('id','nameError')
    d.getElementById('nameError').innerHTML = 'Ingrese su nombre'
  }else if (userName > 3){
    d.getElementById('nameError').setAttribute('id','nameOk')
    d.getElementById('nameError').innerHTML = 'correcto'
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

