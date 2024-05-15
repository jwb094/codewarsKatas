function divisors(integer) {
    
    let checkIfPrime = ifPrime(integer);
    
    if (checkIfPrime === true) {
        return  `${integer} is prime`;
    }

    let divisors =[];
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
console.log(divisors(15));

console.log(divisors(13));