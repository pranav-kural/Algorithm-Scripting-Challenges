// Sum All Odd Fibonacci Numbers
/* Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than 10 are 1, 1, 3, and 5. */

function sumFibs(num) {
  var x = 1,z = 1,y = 1;
  var odds = [1];
  while (z <= num) {    
    if (z % 2 !== 0) odds.push(z);
    x = z + y;
    y = z;
    z = x;
  }
  
  return odds.reduce((prev,curr) => {
    return prev + curr;
  });
}

sumFibs(4);
