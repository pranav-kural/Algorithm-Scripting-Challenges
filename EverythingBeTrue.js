// Everything Be True

/* Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
Remember, you can access object properties through either dot notation or [] notation. */

function truthCheck(collection, pre) {
  return !collection.map((obj) => {
    return (obj.hasOwnProperty(pre) && Boolean(obj[pre]));  
  }).includes(false);
}

truthCheck([{"single": ""}, {"single": "double"}], "single"); // should return false
truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastFoward", "onBoat": true}], "onBoat"); // should return true
