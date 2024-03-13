function countRedBeads(n) {
  //your code here
  return n < 2 ? 0 : (n * 2) -2;
}

console.log(countRedBeads(0));
console.log(countRedBeads(1));
console.log(countRedBeads(3));
console.log(countRedBeads(5));
