function twoSort(s) {


    return s.sort(function(a,b){return    a > b ? 1 : -1;}).shift().split("").join("***");
   //const result = s.sort(function(a,b){return    a > b ? 1 : -1;}).shift().split("").join("***");
   //console.log(result);
  // let firstEl = result.shift();



  //  firstEl = firstEl.split("").join("***");
   // return firstEl;
 //   console.log(firstEl);

}


console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]));//, 'b***i***t***c***o***i***n' );
console.log(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]));//, 'a***r***e'); 