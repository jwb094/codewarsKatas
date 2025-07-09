function digitize(n) {
  //code here
  return n.toString().split("").reverse().map((x) => Number(x));
}

console.log(digitize(35231));//,[1,3,2,5,3]