function scramble(str, arr) {
    // do teh codes
    let output = [];
    console.log(arr);
    var stringSplit = str.split("");
    console.log(stringSplit);
    // for (let index = 0; index < arr.length; index++) {
    //     let ind = arr[index];
    //     console.log(arr[index]);
    //     //console.log(arr[index]);
    //     //console.log(str[arr[index]])
    //     output.push(str[ind]);
    //    // const element = array[index];
        
    // }
    console.log(output);
  };


  console.log(scramble('abcd', [0,3,1,2]));//acdb
  console.log(scramble('sc301s', [4,0,3,1,5,2]));//c0s3s1
  console.log(scramble('bskl5', [2,1,4,3,0]));