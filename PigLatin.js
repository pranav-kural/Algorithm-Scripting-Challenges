// Pig Latin

/*
Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.
*/

function translatePigLatin(str) {
  // vowels
  var vowels = ["a", "e", "o", "u", "i"];
  
  // if the first letter is a vowel
  if (vowels.includes(str.slice(0,1))) {
    return str + "way";
  }
  
  /* if the first letter is a consonant (or consonant cluster) */
  
  // get the index of vowel immediately after the consonant
  var arr = str.split("");
  var firstVowelIndex = 0;
  for(var i = 0; i < arr.length; i++) {
    if (vowels.includes(arr[i])) {
      firstVowelIndex = i;
      break;
    }
  }
  
  return str.slice(firstVowelIndex) + str.slice(0, firstVowelIndex) + "ay";
}

translatePigLatin("consonant");
