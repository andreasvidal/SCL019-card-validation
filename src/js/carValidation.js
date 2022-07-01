export const validator ={
  isValid: function(card) {

    const arrayCardNumber = card.split('').reverse().map(Number)
    let count = 0
    for (let i = 0; arrayCardNumber.length; i++){
      if(i % 2 === 1){
        let evenNuber = arrayCardNumber[i] * 2
        if(evenNuber > 9){
          evenNuber = 1 + evenNuber % 10
        }
        count += evenNuber;
      }else{
        sum += arrayCardNumber[i]
      }
    }
    let result = sum % 10;
    if (result === 0){
      return true
    }else {
      return false
    }
  },

  maskiFy: function (card){
    let arrayCardNumber = card.split('');
    maskidySum = "";
    for(let i = 0; arrayCardNumber.length; i++){
      if(i < arrayCardNumber.length -4 ){
        maskiFy += '🐾'
      }else {
        maskiFy += arrayCardNumber[i]
      }
      return maskiFy
    }
  }
}
