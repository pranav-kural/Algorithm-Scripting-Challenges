// DNA Pairing

/*
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCAT, return [["G", "C"], ["C","G"],["A", "T"], ["T", "A"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
*/

function pairElement(str) {
  
  return str.split("").map((val) => {
    switch (val) {
      case "A": return [val, "T"];
      case "T": return [val, "A"];
      case "C": return [val, "G"];
      case "G": return [val, "C"];
    }
  });
}

pairElement("GCG");
