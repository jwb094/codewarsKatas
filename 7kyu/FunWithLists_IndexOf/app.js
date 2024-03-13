function indexOf(head, value) {
    
    
    // let count=0
    // while(head) {
    //   if (head.data===value){return count}
    //   head = head.next;
    //   count++
    // }
    // return -1;


 /* if (head === null || head.length === 0) {
    return -1;
  } else {
    for (let index = 0; index < head.length; index++) {
      if (head[index] === value) {
        return index;
      }
    }
  }*/
  //  if ((head === null || head.length === 0)) {return -1}

  // for (let index = 0; index < head.length; index++) {
  //         if (head[index] === value) {
  //             return index;
  //         }

  // }
}

console.log(indexOf(null, 17)); //, -1);
console.log(indexOf([1, 2, 3], 2)); //, 1);
console.log(indexOf(["aaa", "b", "abc"], "aaa")); //, 0);
console.log(indexOf([17, "17", 1.2], 17)); //, 0);
console.log(indexOf([17, "17", 1.2], "17")); //;//, 1);
console.log(indexOf([1, 2, 3, 3], 3)); //, 2);
