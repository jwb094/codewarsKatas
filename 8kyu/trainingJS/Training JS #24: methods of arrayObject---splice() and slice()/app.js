function threeInOne(arr){
    //coding here...
    let arrChunks = [];
    for (let i = 0; i < arr.length; i += 3) {
        let chunk = arr.slice(i, i + 3);
        const ans = chunk.reduce((accumulator, currentValue) => accumulator + currentValue);
        arrChunks.push(ans);
    }
    return arrChunks;
  }


  console.log(threeInOne( [1,2,3] ) );//, [6]);
  console.log(threeInOne( [1,2,3,4,5,6] ) );//, [6,15]);
  console.log(threeInOne( [1,2,3,4,5,6,7,8,9] ));// , [6,15,24]);