// Boo who
/* Check if a value is classified as a boolean primitive. Return true or false.
Boolean primitives are true and false. */

function booWho(bool) {

  // Solution 1:
  // return (bool !== null) ? Object.getPrototypeOf(bool) === Boolean.prototype : false;
  
  // Solution 2:
  return [true, false].includes(bool);
}
booWho(null);
