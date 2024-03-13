// function trueOrFalse(val){

// return  val == false ?   "false" : "true"; 
//   }

  const trueOrFalse = (val) =>{
    const falseVals = [0, -0, "", null, undefined, NaN];
    return  val == false ||  falseVals.includes(val) ?   "false" : "true"; 


  }


//   var a=1,b=2,c=1;
//   console.log(trueOrFalse(a>b));//,"false");
//   console.log(trueOrFalse(a===b));//,"false");
//   console.log(trueOrFalse(a<b));//,"true");
//   console.log(trueOrFalse(a!==b));//,"true");
//   console.log(trueOrFalse(b>c));//,"true");
//   console.log(trueOrFalse(b===c));//,"false");
//   console.log(trueOrFalse(b<c));//"false");
//   console.log(trueOrFalse(b!==c));//,"true");
//   console.log(trueOrFalse(a===c));//,"true");
//   console.log(trueOrFalse(a!==c));//,"false");

  var t=true,f=false;
  console.log(trueOrFalse(t&&f));//,"false");
  console.log(trueOrFalse(f&&f));//,"false");
  console.log(trueOrFalse(t&&t));//,"true");
  console.log(trueOrFalse(t||f));//,"true");
  console.log(trueOrFalse(t||t));//,"true");
  console.log(trueOrFalse(f||f));//,"false");
  console.log(trueOrFalse(t&f));//,"false");
  console.log(trueOrFalse(t&t));//,"true");
  console.log(trueOrFalse(f&f));//,"false");
  console.log(trueOrFalse(t|f));//,"true");
  console.log(trueOrFalse(t|t));//,"true");
  console.log(trueOrFalse(f|f));//,"false");
  console.log(trueOrFalse(!t));//,"false");
  console.log(trueOrFalse(!f));//,"true");
  console.log(trueOrFalse(t^f));//,"true");
  console.log(trueOrFalse(t^t));//,"false");
  console.log(trueOrFalse(f^f));//,"false");