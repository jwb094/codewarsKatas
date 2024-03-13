function isDivisible(...params){
    //Get the first param as its assign as `nth`
    const nth = params.shift();
    
    return params.filter((param) => nth % param  === 0).length !== params.length ? false : true;
  
  }

  function isDivisible(n,...params){


    
    return params.filter((param) => n % param  === 0).length !== params.length ? false : true;
  
  }


console.log(isDivisible(3,3,4));//,false);
console.log(isDivisible(12,3,4));//,true);
console.log(isDivisible(8,3,4,2,5));//,false);