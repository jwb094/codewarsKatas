function getDivisorsCnt(n){
    // todo
    let counter = 0;
    for (let index = 1; index <= n; index++) {
   
        if (n % index == 0) {
            counter++;
        }
    }

    return counter;
}



console.log(getDivisorsCnt(1));//,  1);
console.log(getDivisorsCnt(10));//, 4);
console.log(getDivisorsCnt(11));//, 2);
console.log(getDivisorsCnt(54));//, 8);