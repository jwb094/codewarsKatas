function divisors(integer) {
    let divisors =[];
    


    // for (let index = 2; index <= integer; index++) {
    //     n = Math.sqrt(integer);
    //    // const element = array[index];
    //    // console.log( (integer % index === 0));
    //     //console.log( index);
    //     console.log( n % index == 0 );
    // }


    let checkIfPrime = ifPrime(integer);

    if (checkIfPrime === true) {
        return  `${integer} is prime`;
    }
    n = 2;
        do {
            integer % n === 0 ? divisors.push(n) : null;
            n++;
        } while ( n < integer );
      
      return divisors;

};



function ifPrime(num){

    let numofFactor = 0;

    for (let index = 1; index <= num; index++) {
        num % index === 0 ? numofFactor++ : null;
    } 
    return   numofFactor > 2 ? false : true;
}


// console.log(ifPrime(11));
// console.log(ifPrime(12));
// console.log(ifPrime(13));
// console.log(ifPrime(14));
// console.log(ifPrime(15));
console.log(divisors(15));

console.log(divisors(13));