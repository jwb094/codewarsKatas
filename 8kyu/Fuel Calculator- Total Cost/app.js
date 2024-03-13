function fuelPrice(litres, pricePerLitre) {
    // your code here vvv
    // Good luck with it!
    var discount = 0;
    var discountlimit = 0.25;
   
    //var Price = (litres * pricePerLitre).toFixed(2);
    for (var i = 0; i <= litres; i++) {
      if( i  === 2 ){
        discount = 0.05;
      }
      if( i === 4 ){
        discount = 0.10;
      }

      if( i === 6){
        discount = 0.15;
      }
      if( i === 8 ){
        discount = 0.2;
      }
      if( i === 10 ){
        discount = 0.25;
      }
      if (discount >= discountlimit) {
        return;
      }
    }
   //console.log(discount.toFixed(2));
    pricePerLitre = (pricePerLitre - discount);
    const ans = +(pricePerLitre * litres).toFixed(2);
    return  ans;
  }
//console.log(1.23  / 0.10 / 100);
console.log(fuelPrice(5, 1.23)); //5.65
console.log(fuelPrice(8, 2.5));//18.40
console.log(fuelPrice(5, 5.6));//27.50