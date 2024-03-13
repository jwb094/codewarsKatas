var summation = function (num) {
    // Code here
    let sum = 0;
    //for (let index = 1; index <= num; index++) {
        //console.log(index);
    //sum +=  index;      
    //console.log(sum);
    //}
    i=0;
    do {
        i++;
        sum += i;
      } while (i < num );
    return sum;
}
  console.log(summation(2));
  console.log(summation(8));