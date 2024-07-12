function findOdd(A) {
  if (A.length === 1) {
    return A[0];
  }
  const counter = {};
  for (let index = 0; index < A.length; index++) {
    const element = A[index];


    if (counter[element]) {
      counter[element] += 1;
    } else {
      counter[element] = 1;
    }
  }

  for (const key in counter) {
    if (counter[key] % 2 !== 0) {
      return Number(key);
     //return key;
    }
  }
 // console.info(counter);
  // const counter ={};
  // letters.forEach(ele => {
  //     if (counter[ele]) {
  //         counter[ele] += 1;
  //         //string += ele;
  //     } else  {
  //      counter[ele] = 1;
  //     }
  // });

  //happy coding!
  // return 0;
}

console.info(findOdd([7])); //, 7);
console.info(findOdd([0])); //, 0);
console.info(findOdd([1, 1, 2])); //, 2);
console.info(findOdd([0, 1, 0, 1, 0])); //, 0);
console.info(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1])); //, 4);

console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5])); //, 5));