function fuelPrice(litres, pricePerLitre) {
    // your code here vvv
    // Good luck with it!
   
    //var Price = (litres * pricePerLitre).toFixed(2);
    for (i = 2; i <= 10; i+= 2) {
      if (litres >= i ) {
         pricePerLitre -= .05;
      }
    }

    return   (litres * pricePerLitre).toFixed(2);
  }
//console.log(1.23  / 0.10 / 100);
console.log(fuelPrice(5, 1.23)); //5.65
console.log(fuelPrice(8, 2.5));//18.40
console.log(fuelPrice(5, 5.6));//27.50