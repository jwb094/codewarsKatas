function peopleWithAgeDrink(old) {
    let statment = "drink";
if (old < 14) {
    return `${statment} toddy`;
} else if (old >= 14 && old <= 17) {
    return `${statment} coke`;
} else if (old >= 18 && old <= 20) {
    return `${statment} beer`;
}  else {
    return `${statment} whisky`;
}


 
}

// console.log(peopleWithAgeDrink(13));
console.log(peopleWithAgeDrink(14));
// console.log(peopleWithAgeDrink(16));
// console.log(peopleWithAgeDrink(17));
// console.log(peopleWithAgeDrink(19));
// console.log(peopleWithAgeDrink(29));