function hydrate(s) {
  // your code here
  const No = s
    .match(/\d/g) //Find All digits in the string
    .map(Number) //convert array from strings to numbers
    .reduce((prevValue, currentValue) => prevValue + currentValue, 0); //reduce to a single number by adding elements

  return No > 1 ? `${No} glasses of water` : `${No} glass of water`;
}

console.log(hydrate("1 beer")); //1 glass of water
console.log(hydrate("2 glasses of wine and 1 shot")); // "3 glasses of water")
console.log(hydrate("1 shot, 5 beers, 2 shots, 1 glass of wine, 1 beer")); // "10 glasses of water"
