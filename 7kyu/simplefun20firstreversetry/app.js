function firstReverseTry(arr) {
    //coding and coding..

    console.log(arr.length);

    if ( (arr.length > 1 )  ) {
      let first = arr.shift();
      let last = arr.pop();
      arr.unshift(last);
      arr.push(first);
      return arr;
    } else{ 
      return arr;
    }

    console.log(arr);
  }


  console.log(firstReverseTry([1,2,3,4,5]));
  console.log(firstReverseTry([]));
  console.log( firstReverseTry([111]));