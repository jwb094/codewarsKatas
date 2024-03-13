function repeats(arr){


   return arr.filter((num) => {
    return arr.indexOf(num) === arr.lastIndexOf(num);
    }).reduce((accumulator, currentValue) => accumulator + currentValue,0,
      );

    console.log(uniqueArr);
    //..
//     console.log([...new Set(arr)]);
//    let UniqueNumbers  = arr.filter(function(value,index,array){
//     return array.indexOf(value) === index;
//    });

//    console.log(UniqueNumbers)

// let uniqueNumbers = arr.reduce(function(acc, currentValue) {
//     if (acc.indexOf(currentValue) === -1) {
//       acc.push(currentValue);
//     } else{
//         console.log(currentValue);
//     }
//     return acc;
//   }, []);

//   console.log(uniqueNumbers)
    };


    console.log(repeats([4,5,7,5,4,8]))
    console.log(repeats([9, 10, 19, 13, 19, 13]));
    console.log(repeats([16, 0, 11, 4, 8, 16, 0, 11]));
    console.log(repeats([5, 17, 18, 11, 13, 18, 11, 13]));
    console.log(repeats([5, 10, 19, 13, 10, 13]));