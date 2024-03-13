
function howManySmaller(arr,n){
    //coding here..
 //   let m1,m2 = [];
    let  m1 = arr.map((x) => x.toFixed(2));
    let  m2 = m1.filter((num) => num < n );
  
    //console.log(m2);
    return m2.length;
  }
  console.log((howManySmaller([1.234,1.235,1.228],1.24)));//, 2));
  console.log((howManySmaller([1.1888,1.1868,1.1838],1.19)));//, 1));
  console.log((howManySmaller([3.1288,3.1212,3.1205],3.1212)));//, 2));
  