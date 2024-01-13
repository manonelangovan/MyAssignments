function checkNumberType(number){
    if(number>0){
        return `${number} is greater than zero`;
    }
    else if(number<0){
        return `${number} is less than zero`;
    }
    else{
        return `Number is : ${number}`;
    }
}

let number=0;
console.log(checkNumberType(number));