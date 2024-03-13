function maxMin(arr1,arr2){
    //coding here...
    let output=[];
    let i =0;
    do {
        output.push(Math.abs(arr1[i] - arr2[i]));
        i++;
    } while (i < arr1.length);

    return [Math.max(...output),Math.min(...output)];
console.log(output);
  }

  
  console.log(maxMin([1,3,5],[9,8,7]) );
  console.log(maxMin([1,10,100,1000],[0,0,0,0]));
  console.log(maxMin([10,20,30,40],[111,11,1,-111]));
