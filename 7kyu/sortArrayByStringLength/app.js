function sortByLength (array) {
    // Return an array containing the same strings, ordered from shortest to longest
  console.log(array.sort(function(a,b){return a.length - b.length}));
  return array.sort(function(a,b){return a.length - b.length});
};


console.log(sortByLength(["Beg", "Life", "I", "To"]));
console.log(sortByLength(["", "Moderately", "Brains", "Pizza"]));
console.log(sortByLength(["Longer", "Longest", "Short"]));
