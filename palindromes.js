palindrome = (str) => {
  // Good luck!
  // get the Alphanumeric character string from the original str value
  let strAlphanumericVal = str.replace(/[\W_]+/g, '').toLowerCase();
  // return true if the reverse is same
  return (strAlphanumericVal === strAlphanumericVal.split('').reverse().join(''));
}

palindrome("eye");


// ES5

function palindrome(str) {
  var strAlphanumericVal = str.replace(/[\W_]+/g, '').toLowerCase();
  return (strAlphanumericVal === strAlphanumericVal.split('').reverse().join(''));
}

palindrome("eye");
