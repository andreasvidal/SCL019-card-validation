const d = document;
const inputNumber = d.getElementById('inputNumber');
const nameError = d.getElementById('nameError');
const btnSend = d.getElementById('sendForm');
const inputNameUser = d.getElementById('inputNameUser');



btnSend.addEventListener('click', (e) => {
    e.preventDefault();
    inputNameUser.setCustomValidity("");
    inputNameUser.checkValidity();
    console.log(inputNameUser.checkValidity());
})
