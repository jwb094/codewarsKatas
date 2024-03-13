function seatsInTheater(nCols, nRows, col, row) {
    //coding and coding..
    
    let seatsInCurrentARowBlocking = (nCols - col)+1;
    //console.log(seatsInCurrentARowBlocking);
    let seatsInRowsBehindBlocking = (nRows - row);
    //console.log(seatsInRowsBehindBlocking);

    //return seatsInCurrentARowBlocking * seatsInRowsBehindBlocking;


/*    ------------------------------------------------------------------------------------------------------------------------------------*/


return ((nCols - col)+1)*(nRows - row);
  }



console.log(seatsInTheater(16,11,5,3));
console.log(seatsInTheater(1,1,1,1));
console.log(seatsInTheater(13,6,8,3));
console.log(seatsInTheater(60,100,60,1));
console.log(seatsInTheater(1000,1000,1000,1000));