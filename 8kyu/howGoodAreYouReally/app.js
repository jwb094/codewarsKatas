function betterThanAverage(classPoints, yourPoints) {
 //Attempt 1
    // //Get sum
    // let sum  = classPoints.reduce((accumulator, currentValue) => accumulator + currentValue,);
    // //Get AVg
    // let avg = sum / classPoints.length;
    // console.log(avg);
    // //get result
    // return  ( yourPoints > avg) ?  true : false;

    //Attempt 2
        //Get sum + avg
     return  yourPoints > (classPoints.reduce((accumulator, currentValue) => accumulator + currentValue,) / classPoints.length) ? true : false;
     console.log(sum);
    // //Get AVg
    // let avg = sum / classPoints.length;
    // console.log(avg);
    // //get result
    // return  ( yourPoints > avg) ?  true : false;
}
  




console.log(betterThanAverage([2, 3], 5));