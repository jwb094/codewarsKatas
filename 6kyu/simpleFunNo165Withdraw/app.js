function withdraw(n) {
    //coding and coding..
    let TotalAmountLeft= 0;
    let output =[];
    let outputOf100Bills = Math.floor(n / 100);
 
    TotalAmountLeft = n - outputOf100Bills;
   // console.log(TotalAmountLeft);
   // console.log(Math.floor( (n -  (outputOf100Bills * 100) )));
    let outputOf50Bills =  outputOf100Bills === 0 ? Math.floor(n / 100) :  (n -  (outputOf100Bills * 100)) / 50;
    TotalAmountLeft = n - outputOf50Bills;
    //console.log(TotalAmountLeft);
 
  //  typeof outputOf50Bills === 'number' ? outputOf50Bills : 0;
   let outputOf20Bills =  outputOf100Bills === 0 &&  outputOf50Bills === 0 ? Math.floor(n / 20) : Math.floor( (n -  ((outputOf100Bills * 100) + (outputOf50Bills * 50) )) / 20) ;

   console.log(outputOf20Bills);
//    outputOf20Bills =  Number.isInteger(outputOf20Bills) ? outputOf20Bills : 0;

   console.log(outputOf100Bills);
    //console.log(outputOf50Bills);
   // console.log(outputOf20Bills);
    //console.log(Math.floor(n / 100));
    //console.log(Math.floor(n / 50));
    //console.log(Math.floor(n / 20));

  //  console.log(40 / n );

  return [ outputOf100Bills,outputOf50Bills,outputOf20Bills ];
  }

  

  console.log(withdraw(40));//,[0, 0, 2])
//
  console.log(withdraw(250));//,[2, 1, 0])
  
  console.log(withdraw(260));//,[2, 0, 3])
  
  console.log(withdraw(230));//),[1, 1, 4])
  
 console.log(withdraw(60));//,[0, 0, 3])