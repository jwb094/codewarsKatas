function mango(quantity, price){

let freeMangoesQty = 0 ;
for (let index = 1; index <= quantity; index++) {

  ( index   % 3 == 0 ) ?  freeMangoesQty = freeMangoesQty+1 : 0;

}
//console.log(quantity);
//console.log(freeMangoesQty);
//xwconsole.log(quantity * price);
// cxwonsole.log((quantity / 3) * price );
// console.log(freeMangoesQty);
console.log((quantity - freeMangoesQty) * price);
// console.log( freeMangoesQty * price);
//return ((quantity - freeMangoesQty) * price);
}



//console.log(mango(3, 3));
//console.log(mango(9, 5));
console.log(mango(6, 20));
console.log(mango(66, 42));
console.log(mango(82, 49));