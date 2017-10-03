// Missing letters
/*
Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined.
*/

function fearNotLetter(str) {
  var start = str.charCodeAt(0);
  for (var i = 1; i < str.length; i++) {
    if (str[i] !== String.fromCharCode(++start))
      return String.fromCharCode(start);
  }
  return undefined;
}

fearNotLetter("abce");
