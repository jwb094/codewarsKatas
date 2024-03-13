function sortByValueAndIndex(array) {
  let output = [];
  // array.forEach(element => {

  // });
//console.log(array.map((x,i)=>[x,x*i+x]).sort((a,b) => a[1] - b[1]))

    for (let index = 0; index < array.length; index++) {

        let newIndex = index+1;
        let valueXIndex = array[index] *  newIndex;
        output.push({ value_x_index: valueXIndex, index: array[index] });
    }   
    //console.log(output);

    let result = output.sort(function(a, b){return a.value_x_index - b.value_x_index}).map((x) => x.index);
   // console.log(result);

    return result;

//   for (let key in array) {
//     //   console.log( `${key+1} ${array[key]}`)

//     let index = key ;
//     console.log(index);
//     let valueXIndex = array[key] * key + 1;
//    // console.log(valueXIndex);
//     output.push({ value_x_index: valueXIndex, index: array[key] });
//   }
//   console.log(output);
  return array;
}

console.log(sortByValueAndIndex([1, 2, 3, 4, 5]));
console.log(sortByValueAndIndex([ 23, 2, 3, 4, 5 ]));
console.log(sortByValueAndIndex([ 26, 2, 3, 4, 5 ]));
console.log(sortByValueAndIndex([ 9, 5, 1, 4, 3 ]));
