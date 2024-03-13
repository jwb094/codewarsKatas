function cutCube(volume,n){
    //coding here...
   // console.log(Math.cbrt(n)==volume);
   //console.log(volume / n);
    // return Number.isInteger();
    let r =volume / n;
    //Math.cbrt(r);

    console.log(`${r} square root is ${Math.cbrt(r)}`);
   // console.log(`${r} **3 is ${Math.cbrt(r**3)}`);
    console.log(`${r} *2 is ${Math.cbrt(r)*2}`);
    console.log(n / Math.cbrt(r))
  }


 console.log(cutCube(27,27) );///true
 console.log(cutCube(512,8));//true
 console.log(cutCube(512,64));//true
console.log(cutCube(50000,50));// false
console.log(cutCube(432,16));  //false
console.log(cutCube(256,8));//false
console.log(cutCube(27,3));//false
console.log(cutCube(123,456));//false
console.log(cutCube(27,8));//false

