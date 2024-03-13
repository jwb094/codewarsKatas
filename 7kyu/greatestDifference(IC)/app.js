function diff(str) {
  //code here
  let arr = [];
  //let placeholderStr = [];
  let arrDifference = [];
//spilt to array
  str.forEach((element) => {
    let scores = element.split("-");
    arr.push(scores);
  });
///convert to Int
  for (let index = 0; index < arr.length; index++) {
    for (let i = 0; i < arr[index].length; i++) {
      arr[index][i] = parseInt(arr[index][i]);
    }
    arr[index].sort(function (a, b) {
      return b - a;
    });
  }

//calculate difference
  for (const key in arr) {
    let largest = arr[key][0];
    let smallest = arr[key][1];
    arrDifference.push(largest - smallest);
    //console.log(arr[key].shift());
  }
// const tofindDuplicates = a => a.filter((item, index) => a.indexOf(item) !== index)
// const duplicateElements = tofindDuplicates(arrDifference);
// console.log(duplicateElements);
let i = arrDifference.indexOf(Math.max(...arrDifference));
//console.log(i);

  if (arrDifference.reduce((accumulator, currentValue) => accumulator === currentValue)) {
  //  console.log(false);
    return false;
  } else {
    let i = arrDifference.indexOf(Math.max(...arrDifference));
    return str[i];
  }
  //return 

}

console.log(diff(["23-32", "32-23", "2-6", "98-98", "100-101"]));
console.log(diff(["24-32","23-32" ,"32-23", "2-6", "98-98", "100-101"]));
console.log(diff(['22-22','56-56']));
console.log(diff(['52542-522','0-1000000']));
console.log(diff(['52542-522', "2-6", "98-98", "100-101","109329-82"]));