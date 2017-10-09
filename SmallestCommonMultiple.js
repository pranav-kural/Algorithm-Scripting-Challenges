// Smallest Common Multiple
// Get the smallest common multiple for a range of numbers

/* Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
The range will be an array of two numbers that will not necessarily be in numerical order.
e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3. */


function smallestCommons(arr) {
  // get an array with all the numbers in the range given in arr. NOTE: return array sorted ascending
  let nums = getAllNumbers(arr);
  
  let flag = false;
  
  while(!flag) {
    // get LCM of current elements of nums
    nums = getLCM(nums);
    flag = (nums.length === 1);
  }
  
  return nums[0];
}

function getLCM(arr) {
  
  let nums = [];
  while (arr.length > 0) {
    if (arr.length >= 2) {
      let x = arr.pop();
      let y = arr.pop();
      nums.push(y * x / getGCD(y, x));
    } else if (arr.length === 1) {
      nums.push(arr.pop());      
    }
  }
  return nums;
  
}

function getGCD(a,b) {
  
  let c = 0;
  
  while (a != b) {
    if (a > b) {
      c = a - b;
      a = c;
    } else if (b > a) {
      c = b - a;
      b = c;
    }
  }
  
  return c;
}

function getAllNumbers(range) {
  var min = Math.min(...range);
  var max = Math.max(...range);
  for (var i = min + 1; i < max; i++) {
    range.push(i);
  }
  
  return range.sort((a,b) => a-b);
}

smallestCommons([1,5]);
