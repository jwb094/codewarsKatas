function hero(bullets, dragons){
    //Get Coding!
    //console.log(bullets / 2);
   // console.log(bullets / dragons);
    return (bullets / 2) >= dragons  ? true : false;

}
    

console.log(hero(10, 5));//true
console.log(hero(7, 4));//false
console.log(hero(4,5));//false
console.log(hero(100,40));//true
console.log(hero(1500,751));//false