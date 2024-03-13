function isDivisible(n,...params){
  console.log(n);
    const nth = params.shift();
    //console.log(nth);
   // console.log(params);
    //console.log(nums);
    //Write your code here
    // console.log(num);
    // console.log(`${arr}` +   );
    //const numbers = Array(num);
    //console.log(numbers);

   // const ans = params.filter((param) => nth % param  === 0);
   // console.log(ans);
    return params.filter((param) => nth % param  === 0).length !== params.length ? false : true;
  
  }



console.log(isDivisible(3,3,4));//,false);
console.log(isDivisible(12,3,4));//,true);
console.log(isDivisible(8,3,4,2,5));//,false);