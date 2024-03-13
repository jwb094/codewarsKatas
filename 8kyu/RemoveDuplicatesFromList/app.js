function distinct(arr) {

return arr.filter((item,index) => arr.indexOf(item)  == index);

  }

  console.log(distinct([1,2]));
  console.log(distinct([1,1,2]));
  console.log(distinct([1,2,3,4,5,5,5]));