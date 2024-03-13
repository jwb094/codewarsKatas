function arrayMash (array1, array2) {
    // do the mash
    let output = [];
    /*for (let index = 0; index < array1.length; index++) {
        output.push(array1[index],array2[index])
    }*/


   // console.log(output);

    for (const key in array1) {
        console.log(array1[key]);
        output.push(array1[key],array2[key]);
    }
    return output;
    console.log(output);
  }



console.log(arrayMash([1, 2, 3], ['a', 'b', 'c']));//, [1, 'a', 2, 'b', 3, 'c'])
console.log(arrayMash([1, 2, 3, 4, 5], ['a', 'b', 'c', 'd', 'e']),);// [1, 'a', 2, 'b', 3, 'c', 4, 'd', 5, 'e'])
console.log(arrayMash([1, 1, 1, 1], [2, 2, 2, 2]));//, [1, 2, 1, 2, 1, 2, 1, 2])
console.log(arrayMash([1, 8, 'hello', 'dog'], ['fish', '2', 9, 10]));//, [1, "fish", 8, "2", "hello", 9, "dog", 10])
console.log(arrayMash([null, null, 4], [NaN, null, 'hello']));//, [null, NaN, null, null, 4, "hello"])
console.log(arrayMash([1], [2]));//, [1, 2])
console.log(arrayMash(['h', 'l', 'o', 'o', 'l'], ['e', 'l', 'w', 'r', 'd']));//, ["h", "e", "l", "l", "o", "w", "o", "r", "l", "d"])