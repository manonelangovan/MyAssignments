function checkOddOrEven(number){
    if(number%2==0){
        return `${number} is Even`
    }
    else{
        return `${number} is odd`
    }
}

let number = 5;
console.log(checkOddOrEven(number));