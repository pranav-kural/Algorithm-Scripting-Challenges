// Roman Numeral Converter

// Convert the given number into a roman numeral.

function convertToRoman(num) {
  // get a breaked down of num in tens
  let nums = breakItDown(num);
  
  return nums.map((val) => {
    
    if (val.length > 3)
      return "M".repeat(parseInt(val.substr(0,val.length- 3)));
    
    return romanNumericals[parseInt(val)];
  }).join("");
}

let breakItDown = (num) => {

  // ex: if num = 4782; nums === ["2", "8", "7", "4"]; (index represents the position in terms of tens)
  let nums = num.toString().split("").reverse();
  
  // get the tens array
  let arr = [];
  for(let i = 0;  i < nums.length; i++) {
    arr.push((nums[i] * parseInt("1" + "0".repeat(i))).toString());
  }
  
  // sort back the array in descending order
  return arr.sort((a,b) => b-a);
};

// roman numericals
let romanNumericals = {
  1:"I",
  2:"II",
  3:"III",
  4:"IV",
  5:"V",
  6:"VI",
  7:"VII",
  8:"VIII",
  9:"IX",
  10:"X",
  20:"XX",
  30:"XXX",
  40:"XL",
  50:"L",
  60:"LX",
  70:"LXX",
  80:"LXXX",
  90:"XC",
  100:"C",
  200:"CC",
  300:"CCC",
  400:"CD",
  500:"D",
  600:"DC",
  700:"DCC",
  800:"DCCC",
  900:"CM",
  1000:"M"
};

// test: should return XXXVI
convertToRoman(36);



