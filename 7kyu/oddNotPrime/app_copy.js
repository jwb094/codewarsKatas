function oddNotPrime(n){
    //your code here
    let oddNumbers= [];
    let oddNumbersNotPrime= [];
    let oddNumbersNotPrimeCounter= 0;
    for (let index = n; index >= 1; index--) {
        
        if(index % 2 !== 0){
        oddNumbers.push(index);
        }
    }
    // console.log(oddNumbers);

    
    oddNumbers.forEach(element => {
        console.log(element % 2  === 0);
       //let ans = isPrime(element);
        if ((element % 2  === 0) ===false|| element % Math.sqrt(element) === 0 ){   oddNumbersNotPrime.push(element);}
    });

    // function isPrime(num){
    //   if(num < 2) return false;
    //     for (var i = 2; i <= num/2; i++) {
    //         if(num%i==0){
    //             return false;
    //         }
    //     }
    //     return true;
    // }


    https://medium.com/swlh/an-algorithm-a-day-how-to-check-for-a-prime-number-in-javascript-7052630fb4ef
console.log(oddNumbersNotPrime);
return oddNumbersNotPrime.length;
  }

  console.log(oddNotPrime(5));//,1);
  console.log(oddNotPrime(10));//,2);
  console.log(oddNotPrime(99));//,26);
  console.log(oddNotPrime(9));//,2);
  console.log(oddNotPrime(1));//,1);