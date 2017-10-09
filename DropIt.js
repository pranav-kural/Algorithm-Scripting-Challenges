// Drop it
/* Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true.
The second argument, func, is a function you'll use to test the first elements of the array to decide if you should drop it or not.
Return the rest of the array, otherwise return an empty array.*/

// ex. dropElements([0, 1, 0, 1], function(n) {return n === 1;}) should return [1, 0, 1]

function dropElements(arr, func) {
  var flag = false;
  return arr.filter((val) => {
    flag = (flag) ? flag : func(val);
    return flag;
  });
}

dropElements([1, 2, 3], function(n) {return n < 3; });
