
  var shuffleIt=(arr,...arr_)=>{ // arrow function


    for (let index = 0; index < arr_.length; index++) {

      var [a,b] = [arr_[index].shift(),...arr_[index]];
      [arr[a],arr[b]]=[arr[b],arr[a]];

    }
return arr;

  }

  console.log(shuffleIt([1,2,3,4,5],[1,2]) );//, [1,3,2,4,5]
  console.log(shuffleIt([1,2,3,4,5],[1,2],[3,4]) );//, [1,3,2,5,4]
  console.log(shuffleIt([1,2,3,4,5],[1,2],[3,4],[2,3]) );//, [1,3,5,2,4]
