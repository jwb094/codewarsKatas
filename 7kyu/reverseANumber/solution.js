function reverseNumber(n) {

  let output = n.toString().split("").reverse().join("");
  return (/[-]/.test(output)) ? Number(output.slice(-1)+ output.slice(0, output.length-1)) : Number(output);

  }



 console.log(reverseNumber(123));//, 321)
 console.log(reverseNumber(-123));//, -321, 'Negative Numbers should be preserved')
 console.log(reverseNumber(1000));//, 1, 'Should handle numbers ending with "0"')
 console.log(reverseNumber(4321234));//, 4321234)
 console.log(reverseNumber(5));//, 5)
 console.log(reverseNumber(0));//, 0)
 console.log(reverseNumber(98989898));//, 89898989)