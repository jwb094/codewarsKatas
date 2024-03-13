// function shuffleIt(arr,index1,index2){
//     //coding here...

//    //index1 = arr[index1];
//    //index2 = arr[index2];
//     console.log(arr);
//     console.log(index1);
//     console.log(index2);
    

    

//   }


  var shuffleIt=(arr,...arr_)=>{

  //  // console.log(index1,...arr);
  //   //console.log(arr);
  //  // console.log(arr_);
  //   // var[a_,...b_] = arr; 
  //   // console.log(b_);
  //   console.log(arr);
    for (let index = 0; index < arr_.length; index++) {

      var [a,b] = [arr_[index][0],arr_[index][1]];
    //   console.log(a);
    //  console.log(b);
  
     //arr[b] = arr[a];
     //console.log(arr);

      [arr[a],arr[b]]=[arr[b],arr[a]];
     // console.log(arr);
    }
return arr;
    // arr[arr_[b]] = arr[arr_[a]];
    // console.log(arr,...arr);
   // console.log(arr)
    // arr.push(el1);
    // arr.push(el2);
    // return arr;
    console.log(arr);
  }

  console.log(shuffleIt([1,2,3,4,5],[1,2]) );//, [1,3,2,4,5]
  console.log(shuffleIt([1,2,3,4,5],[1,2],[3,4]) );//, [1,3,2,5,4]
  console.log(shuffleIt([1,2,3,4,5],[1,2],[3,4],[2,3]) );//, [1,3,5,2,4]
