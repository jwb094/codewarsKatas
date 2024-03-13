function converter (mpg) {
    //code to convert miles per imperial gallon to kilometers per liter

   // console.log( (mpg * 4.54609188) / 1.6);
   // console.log( (Math.round(mpg /  4.54609188  ).toFixed(2))  1.609344 );
 //console.log((mpg / 4.54609188)  *  1.609344 );
    console.log( parseFloat(((mpg / 4.54609188)  *  1.609344).toFixed(2)) );
  //return ((mpg / 4.54609188)  *  1.609344).toFixed(2);
  }


  console.log(converter(10));
  console.log(converter(20));
  console.log(converter(30));