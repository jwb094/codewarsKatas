
function feast(beast, dish) {
    //your function here

    return ( (beast[0] === dish[0])  && (beast.slice(-1) === dish.slice(-1))) ? true: false;
    console.log(beast[0]);
    console.log(beast.slice(-1));
    console.log(dish[0]);
    console.log(dish.slice(-1));
    }
console.log(feast("great blue heron", "garlic naan"));//, true)
console.log(feast("chickadee", "chocolate cake"));//,, true)
console.log(feast("brown bear", "bear claw"));//,, false)