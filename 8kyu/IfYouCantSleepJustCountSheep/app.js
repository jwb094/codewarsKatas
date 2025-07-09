var countSheep = function (num){
  //your code here
  let answerString = "";
  if (num === 0) {
    return "";
  }

  for (let index = 1; index <= num; index++) {
    
    answerString += `${index} sheep...`;
  }
  return answerString;
}



console.log(countSheep(0));
console.log(countSheep(1));
console.log(countSheep(2));
console.log(countSheep(3));