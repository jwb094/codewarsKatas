function past(h, m, s) {
  //#Happy Coding! ^_^
  let hToMilliseconds;
  let mToMilliseconds;
  let sToMilliseconds;
  if (h === 0 && m === 0 && s === 0 ) {
    return 0;
  }

  if (h >= 0 && h <= 23) {
    hToMilliseconds = h * 60 * 60 * 1000;
  }
  if (m >= 0 && m <= 59) {
    mToMilliseconds = m * 60 * 1000 ;
  }
  if (s >= 0 && s <= 59) {
    sToMilliseconds = s * 1000;
  }

  return hToMilliseconds+mToMilliseconds+sToMilliseconds;
}


console.log(past(0,1,1));//61000
console.log(past(1,1,1));//3661000
console.log(past(0,0,0));//0
console.log(past(1,0,1));//61000
console.log(past(1,0,0));//3600000