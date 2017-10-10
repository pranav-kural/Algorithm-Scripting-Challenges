// Sum All Primes
/* A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.
The provided number may not be a prime. */

function sumPrimes(num) {
  
  var sum = 0;
    for(var i = 2; i <= num; i++) {
      sum += (isPrime(i)) ? i : 0;
      console.log(isPrime(i));
    }
  
  return sum;
}

function isPrime(num) {
    //check if n is a multiple of 2
    if (num !==2 && num%2==0) return false;
    //if not, then just check the odds
    for(var i=3;i*i<=num;i+=2) {
        if(num%i==0)
            return false;
    }
    return true;
}

sumPrimes(10);
