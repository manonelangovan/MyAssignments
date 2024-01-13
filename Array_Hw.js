

function moveZerosToTheEnd(nums) {
    let zeros = 0
  for (let i = 0; i < nums.length; i++) {
   let isZero = nums[i] === 0
     if (isZero){
        zeros++
        nums.splice(i, 1)
        i--
      }
    }
  for (let i = 0; i < zeros; i++){
      nums.push(0)
  }
 return nums
};

let nums = [0,1,0,3,12];
console.log(moveZerosToTheEnd(nums));
