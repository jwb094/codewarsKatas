function getLength(arr){
    //return length of arr
    return arr.length;
  }
  function getFirst(arr){
    //return the first element of arr
    return arr.shift();
  }
  function getLast(arr){
    //return the last element of arr
    return arr.pop();
  }
  function pushElement(arr){
    var el=1;
    arr.push(4);
    //console.log(arr);
    return arr;
    //push el to arr
    

  }
  function popElement(arr){
    //pop an element from arr
    
    return arr.pop();
  }


console.log(getLength([1,2,3]));//,3);
console.log(getFirst([1,2,3]));//,1);
console.log(getLast([1,2,3]));//,3);
console.log(pushElement([1,2,3]));//.length,4);
console.log(popElement([1,2,3]));//.length,2);