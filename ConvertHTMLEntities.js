// Convert HTML Entities
/* Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities. ex: "<" to "&lt;" and "&" to "&amp;" */

function convertHTML(str) {
  
  let pairs = {
    "&":"&amp;",
    "<":"&lt;",
    ">":"&gt;",
    "'":"&apos;",
    '"':'&quot;'
  };
  
  return Object.keys(pairs).reduce((val, key) => {
    return val.replace(new RegExp(key, "gi"), pairs[key]);
  }, str);
}

convertHTML("Dolce & Gabbana");
