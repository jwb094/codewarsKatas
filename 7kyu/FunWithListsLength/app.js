function length(head) {

    if (head === null ) {return 0}
    // do {
        
    // } while (condition);
     let count = 0;

     head.forEach(element => {
        count++;
     });
     return count;
    // while (head) {

    //   console.log(head.data);  
    // }return 0;

    //    // console.log(head.reduce(a => a+1, 0));
//     let i =0;
//     do {
//         i++;
//     } while (i < head.reduce(a => a+1, 0));
//    // if ((head === null || head.length === 0)) {return -1}
//     return i;
//    // return 0;
  }


  console.log(length(null));
  console.log(length([1,2,3,4]));