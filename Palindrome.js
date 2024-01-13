function verifyGivenStringIsPalindrome(str){
    let reverse = '';
    for(let i= str.length-1; i>=0;i--){
        reverse= reverse+str[i];
    }
    console.log('Revrsed value is: '+ reverse);

    if(str.toLowerCase()==reverse.toLowerCase()){
        return true;
    }
    else{
        return false;
    }

}
let str = 'CAC';
console.log(verifyGivenStringIsPalindrome(str));