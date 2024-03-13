function colourAssociation(array){

    let Arr = [];
    
    array.forEach(element => {
        new_array = {};
        new_array[element.shift()]  = element.pop(); 
        Arr.push(new_array);
    });
        // var title = element[0];
        // var link = element[1];
        // new_array[title]  = link;

    

       // var title = element[0];
        // var link = element[1];
         //new_array = {title : link};
      
         //console.log(new_array);
  
         //console.log(Arr);
         //console.log(title + link );
       // new_array[element.shift()]  = element.pop();


    return Arr;
    //console.log(Array(new_array));
    // for (let index = 0; index < array.length; index++) {
    //     const element = array[index];
    //    // console.log(element);
    //     for (let e_index = 0; e_index < element.length; e_index++) {
    //         console.log(element[e_index]);
    //     }
    // }
    // We <3 colours..

//     console.log(array);
// new_array = [];
//     for (const key in array) {
//         // console.log(array[key][0]);
//         // console.log(array[key]);
//         // for (const v in array[key]) {
//         //     console.log(array[key][v]);
//         // }
//         new_array.push({title : link});
//         // for (let index = 0; index < array[key].length; index++) {
//         //     const element = array[key][index];
//         //     console.log(element);
//         // }
//         //     for (const value in array[key]) {
//         //     console.log(array[key][value]);
//         // }
//     }


}

console.log(colourAssociation([["white", "goodness"], ["blue", "tranquility"]]));