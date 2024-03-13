function countSumOfTwoRepresentations(n, l, r) {
    //coding and coding..
    let ans =0;
    let up =l;
    let down =r;
    // do {
    //      if(up + down === n){
    //      ans = ans+1;
    //      }
    //     //console.log(down);
    //     up = up+1;
    //     down = down - 1;
    //    // console.log(up ,down);
    //     console.log(`${up} ${down} ` + `${up+down}`);
    // } while (up < r && down >= l );
    // return ans;


    /* loop through l to r 
    8 = 8+9 / 8+10 / 8+11 / 8+12 / 8+13 / 8+14/ 8+15/ 8+16
    9 = 9+10 / 8+9 / 8+12 / 8+13 / 8+14/ 8+15/ 8+16
    */


    for (let up = l; up <= r; up++) {
        //console.log(up);
         for (let down = r; down >= up; down--) {
             if(up + down === n){
                ans = ans+1;
              }
         }
    }

return ans;
  }


console.log(countSumOfTwoRepresentations(6,2,4));//2
console.log(countSumOfTwoRepresentations(6,3,3));//1
console.log(countSumOfTwoRepresentations(10,9,11))//0
console.log(countSumOfTwoRepresentations(24,8,16))//5
//12+12
//11+13
//10+14
//9+15
//8+16
console.log(countSumOfTwoRepresentations(24,12,12))//1
console.log(countSumOfTwoRepresentations(93,24,58))//12

