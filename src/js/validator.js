function transNumber(numberValid) {
    if (numberValid > 9) {
        let separateNumberValid = numberValid.toString().split('');
        //console.log(separateNumberV);
        let newNumberValid = separateNumberValid.reduce(function(a, b) {
            let num1 = parseInt(a);
            let num2 = parseInt(b);
            return num1 + num2;
        });

        return newNumberValid;
    } else {
        return numberValid;
    }
}
const validator = {
    isValid: function(creditCardNumber) {
        let arrayNumberCard = creditCardNumber.split('').reverse();

        let newArrayNumber = arrayNumberCard.map(function(v, index) {
            let newElement;
            if (index % 2) { //consultar
                newElement = transNumber(v * 2);
            } else {
                newElement = parseInt(v);
            }
            return newElement;
        });
        // console.log(newArrayNumber);
        let addNumbersCard = newArrayNumber.reduce(function(a, b) {
            return a + b;
        });

        if (addNumbersCard % 10 == 0) {

            return true;
        } else {

            return false;
        }
    },
    maskify: function(creditCardNumber) {
        let hiddeNumber = [];
        for (let ind = 0; ind < creditCardNumber.length; ind++) {
            if (ind < creditCardNumber.length - 4) {
                hiddeNumber.push('🐾');
            } else {
                hiddeNumber.push(creditCardNumber[ind]);
            }
        }
        return hiddeNumber.join('');
    },
};
export default validator;
