function lengthOfLastWord(input)
{
  const chrArray= input.split(' ');
  return chrArray[chrArray.length-1].length;
} 

const input = "Hello World!!!";
const result = lengthOfLastWord(input);
console.log('The length of the last word is ' +result);

