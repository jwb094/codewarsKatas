function removeEveryOther(arr){
    //your code here

//  let x = arr.filter(function(element, index) 
//  { return index % 2 == 0;});


//  var filtered = arr.filter(function(element, index){
//     return  index % 2 == 0;
//   });

    // console.log(ans);
    // console.log(arr);

    // for (var i = 0; i <= arr.length; i++) {
    // if ( i % 2 == 0) {
    //       arr.splice(arr[i],1); 
    //        }
    // }
    // console.log(arr);
    // return filtered;
filtered = [];
    for (var i = 0; i < arr.length; i ++) {
      if ( i % 2 == 0) {
        
        console.log(arr[i]);
            filtered.push(arr[i]); 
             }
      }
      console.log(filtered);
      return filtered;
}


removeEveryOther(['Hello', 'Goodbye', 'Hello Again']); 
//['Hello', 'Hello Again']);
removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);//[1, 3, 5, 7, 9]);
// removeEveryOther([[1, 2]])// [[1, 2]]);
// removeEveryOther([['Goodbye'], {'Great': 'Job'}])//[['Goodbye']]);