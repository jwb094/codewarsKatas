function sumTriangularNumbers(n) {
    let trinagularNumberArray = [];
    let index = 0;
do{
    if(index === 1){
        trinagularNumberArray.push(index);
     };
    if((3 * index) - 3 === n){
        trinagularNumberArray.push(index);
         };
         index++;
         console.log(index);
}
while (index <= n)
console.log(trinagularNumberArray);

    //return 0;
  }


  console.log(sumTriangularNumbers(6));