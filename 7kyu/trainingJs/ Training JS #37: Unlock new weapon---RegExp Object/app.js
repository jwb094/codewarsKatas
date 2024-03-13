function countAnimals(animals, count) {
  //coding here...
  let result = [];

  console.log();

  for (var r of count) {
   result.push( (animals.match(new RegExp(r)) == null) ? 0 : animals.match(new RegExp(r,"g")).length);
  }
  return result;
}

console.log(countAnimals("dog,cat", ["dog", "cat"])); //, [1,1]);
 console.log(countAnimals("dog,cat",["dog","cat","pig"]) );//, [1,1,0]);
console.log(countAnimals("dog,dog,cat",["dog","cat"]) );//, [2,1]);
 console.log(countAnimals("dog,dog,cat",["pig","cow"]) );//, [0,0]);
