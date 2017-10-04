// Spinal Tap Case
/* Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes. 
ex: spinalCase("AllThe-small Things") should return "all-the-small-things" */

function spinalCase(str) {
  return str.replace(/[A-Z]/g, (match, offset, string) => {
    return (offset && (str[offset-1].match(/([_])|([^\w])/g) === null) ? "-" : "") + match.toLowerCase();    
  }).replace(/([_])|([^\w])/g, "-");
}

// What's happening here:
  //1. Replace all Capital Case letter to lower case
  //2. if the Capital case letter has a letter or number on it's left add a "-" between them
  //3. replace all non-alphanumeric characters (including spaces) with "-"
  
spinalCase('This Is Spinal Tap');
