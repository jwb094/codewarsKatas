//return price without vat
function excludingVatPrice(price){
    // your code
   // console.log( 230 / 100 * 15);
//  let VAT = Number(price  / 1.15).toFixed(2);
//  console.log(VAT);
//  return VAT !== null ? VAT : -1;

//return  Number(price  / 1.15).toFixed(2) > -1 ? Number(price  / 1.15).toFixed(2) : -1;


return price == null ?  -1 : Number((price  / 1.15).toFixed(2)) ;
    //console.log(VAT.toFixed(2));
    //return 0;

}

console.log(excludingVatPrice(230));//, 200.00)
console.log(excludingVatPrice(123));//, 106.96)
console.log(excludingVatPrice());