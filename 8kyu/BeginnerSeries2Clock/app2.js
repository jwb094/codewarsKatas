function past(h, m, s) {
  //#Happy Coding! ^_^
  return (h * 60 * 60 * 1000)+(m * 60 * 1000 )+(s * 1000);
}


console.log(past(0,1,1));//61000
console.log(past(1,1,1));//3661000
console.log(past(0,0,0));//0
console.log(past(1,0,1));//61000
console.log(past(1,0,0));//3600000