function oddCount(n){
  // your code here

let oddCountCounter = 0
  for (let index = 1; index < n; index++) {
   if (index % 2 !== 0) {
    oddCountCounter++;
   }
  }
return oddCountCounter;
  console.log(oddCountCounter);
}


console.log(oddCount(15));