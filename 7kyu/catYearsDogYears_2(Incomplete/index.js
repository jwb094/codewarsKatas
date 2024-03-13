var ownedCatAndDog = function(catYears, dogYears) {
    // Your code here!
let remainingDogYrs = dogYears;
let remainingCatYears = catYears;
let index  = 1;
// do {
    


// } while (catYears  > 0 && dogYears  > 0);

// for (let index = 0; index < catYears.length; index++) {
//     const element = array[index];
    
// }

//     return [0,0];



    if (catYears === 15 && dogYears === 15) {
        return [1,1];
    } else if ((catYears > 15 && catYears <= 24) &&(catYears > 15 && catYears <= 24) ) {
        return [2,2];
    } else if (catYears > 24 && dogYears > 24){

        return [((catYears - 24) /4) +2 ,((dogYears - 24) /5) +2 ];
        console.log((catYears - 24) /4);
    }
  }


console.log(ownedCatAndDog(15,15));//[1,1]

console.log(ownedCatAndDog(24,24));//[2],2]

console.log(ownedCatAndDog(56,64));//[10,10]