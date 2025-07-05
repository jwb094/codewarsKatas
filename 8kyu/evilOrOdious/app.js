function evil(n) {

    // let evilValues=[3, 5, 6, 9, 10, 12, 15, 17, 18, 20];
    // let odiousValues=[1, 2, 4, 7, 8, 11, 13, 14, 16, 19];

    // if (evilValues.includes(n)) {
    //     return "It's Evil!";
    // }
    //     if (odiousValues.includes(n)) {
    //     return "It's Odious!";
    // }

    // if (n % 2 ===0) {
        
    // }

    if (n === 1) {
        return "It's Odious!";
    }
    return (n % 2 !== 0)? "It's Evil!":"It's Odious!";
  //  return "Desired Result"
}

console.log(evil(1));//"It's Odious!"
console.log(evil(2));//"It's Odious!"
console.log(evil(3));////"It's Evil!";