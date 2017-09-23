// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

// Note that inserting the three dots to the end will add to the string length.

// However, if the given maximum string length num is less than or equal to 3, then the addition of the three dots does not add to the string length in determining the truncated string.

function truncateString(str, num) {
  // Clear out that junk in your trunk
  var len = str.length;
   return str
     .slice(0, (num < 3 || num === len) ? num : (num > len) ? len : num-3)
     .concat((len !== num && len >= num) ? '...' : '');
}

truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2);
