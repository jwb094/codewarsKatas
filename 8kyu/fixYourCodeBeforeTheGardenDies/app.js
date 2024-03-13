/*function rainAmount(mm){
    if (rainAmount = 40) {
         return "You need to give your plant " + {rainAmount - 40} + " mm of water"
    };
    if else {
         return "Your plant has had more than enough water for today!"
    };
}*/

function rainAmount(mm){

   return  (mm < 40) ? `You need to give your plant ${40 - mm}mm of water`:`Your plant has had more than enough water for today!`;
}

console.log(rainAmount(100));
console.log(rainAmount(39));