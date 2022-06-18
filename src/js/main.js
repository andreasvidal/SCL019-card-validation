const d = document;
const inputNumber = d.getElementById('inputNumber');
const nameError = d.getElementById('nameError');
const btnSend = d.getElementById('sendForm');
const inputNameUser = d.getElementById('inputNameUser');



btnSend.addEventListener('click', (e) => {
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
        btnSend.innerHTML = 'Send'
    }
})
