function bigToSmall(arr){
    //coding here...
    return  [].concat(...arr).sort(function(a,b){return   b-a }).join(">");
    /*
    let result =[].concat(...arr).sort(function(a,b){return   b - a}).join(">");
    console.log(result);*/
  }


  console.log(bigToSmall([[1,2],[3,4],[5,6]]));
  console.log(bigToSmall([[1,3,5],[2,4,6]]) );
  console.log(bigToSmall([[1,1],[1],[1,1]]));