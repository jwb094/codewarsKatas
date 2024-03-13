function sumOfIntegersInString(s){
    //console.log(s.match(/\d{0,}/g));
    //console.log(s.match(/\d{0,}/g).filter((x)=> x !== "" ));
    //console.log(s.match(/\d{0,}/g).filter((x)=> x !== "" ).map((n) => parseInt(n)));
    //console.log(s.match(/\d{0,}/g).filter((x)=> x !== "" ).map((n) => parseInt(n)).reduce((accumulator, currentValue) => accumulator + currentValue,0,));
    return s.match(/\d{0,}/g).filter((num)=> num !== "" ).map((int) => parseInt(int)).reduce((acc, cVal) => acc + cVal,0,);
  }

//  \d{0,}
//\d{0,}
// \d\d|\d

    console.log(sumOfIntegersInString("12.4"));//16
    console.log(sumOfIntegersInString("h3ll0w0rld"));//3
    console.log(sumOfIntegersInString("2 + 3 "));//5
    console.log(sumOfIntegersInString("Our company made approximately 1 million in gross revenue last quarter."));//1
    console.log(sumOfIntegersInString("The Great Depression lasted from 1929 to 1939"));//3868
    console.log(sumOfIntegersInString("Dogs are our best friends."));//0
     console.log(sumOfIntegersInString("C4t5 are 4m4z1ng."));//18
    console.log(sumOfIntegersInString("The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog"));//3635