function balancedNum(number)
{

    if (number.toString().split("").length === 1 || number.toString().split("").length === 2) {
        return "Balanced";
    } 
    if (number.toString().split("").length === 3) {
        let numbers = number.toString().split("");
        let middle = numbers[1];
        if (numbers.shift() === numbers.pop()) {
            return "Balanced";
        } else {
            return "Not Balanced";
        }
    }


  
    let count = number.toString().split("").length;

    if (count % 2 === 0) {
        let middle =  Math.floor(count/2);
        let lefthand = number.toString().split("").slice(0,middle-1).map(Number).reduce((accumulator, currentValue) => accumulator + currentValue,0,);;
        let righthand = number.toString().split("").slice(middle+1,number.length).map(Number).reduce(
            (accumulator, currentValue) => accumulator + currentValue,0);;
          return  lefthand === righthand ? "Balanced" : "Not Balanced";
    } else{
        let middle =  Math.floor(count/2);

        numbers = number.toString().split("");
        let lefthand = numbers.slice(0,middle).map(Number).reduce((accumulator, currentValue) => accumulator + currentValue,0,);
        let rightHand = numbers.slice(middle+1,numbers.length).map(Number).reduce((accumulator, currentValue) => accumulator + currentValue,0,);
      return  lefthand === rightHand ? "Balanced" : "Not Balanced";
    }
}


console.log(balancedNum(7));//, "Balanced")
console.log(balancedNum(959));//, "Balanced")
console.log(balancedNum(13));//, "Balanced")
console.log(balancedNum(432));//, "Not Balanced")
console.log(balancedNum(424));//, "Balanced")


console.log(balancedNum(1024));//,, "Not Balanced")
console.log(balancedNum(66545));//,, "Not Balanced")
console.log(balancedNum(295591));//,, "Not Balanced")
console.log(balancedNum(1230987));//,, "Not Balanced")
console.log(balancedNum(56239814));//,, "Balanced")