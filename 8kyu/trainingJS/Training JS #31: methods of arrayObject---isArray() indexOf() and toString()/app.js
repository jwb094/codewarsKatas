function blackAndWhite(arr){
    //coding here...
    if(Array.isArray(arr) === false) { return `It's a fake array` };

    //arr =JSON.stringify(arr);
    //console.log(arr);

   const filtered = arr.filter((x) => {return x === 5 || x=== 13})
   filter = new Set(filtered);
    console.log(filter);
   if (filter.size <= 1) {return `It's a white array`   }
   if (filter.size == 2) {return `It's a black array`   }
 //   console.log(i);
    // if((arr.indexOf(0) == 5 || 13) && (arr.indexOf(1) == 5 || 13)) { return` It's a black array` ; }
    // if((arr.indexOf(0) !== 5 ||  13) || (arr.indexOf(1) !== 5 ||  13)) { return `It's a white array`; }
  }


console.log(blackAndWhite(5,13))
console.log(blackAndWhite([5,13]))
console.log(blackAndWhite([5,12]))

console.log(blackAndWhite([4,3,19,4,13,1,7,9,16,10,13,0] ));
console.log(blackAndWhite([0,14,3,8,10,12,12,2] ));