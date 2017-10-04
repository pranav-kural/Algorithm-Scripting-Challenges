// Spinal Tap Case
/* Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes. 
ex: spinalCase("AllThe-small Things") should return "all-the-small-things" */

function spinalCase(str) {
  return str.replace(/[A-Z]/g, (match, offset, string) => {
    return (offset && (str[offset-1].match(/([_])|([^\w])/g) === null) ? "-" : "") + match.toLowerCase();    
  }).replace(/([_])|([^\w])/g, "-");
}

spinalCase('This Is Spinal Tap');
