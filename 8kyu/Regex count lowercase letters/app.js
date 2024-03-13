// function lowercaseCount(str){
//     //How many?
// //    console.log("/[a-z]/".test(str));
//     //result = /^a-z/.test(str);
//     // console.log(result);
//    // console.log(str.split(""));
//     // const re = str.search(/^a-z/);
//     // console.log(str.match(/[a-z]/));
//     // console.log(re);
//     str = str.split("");  
//     console.log(str);
//     let counter = 0;
//     str.forEach(element => { 
//             if (element == element.toLowerCase()  && element.match(/[a-z]/) ) {
//                counter += 1;
//             }
//     });
// console.log(counter);


// }


function lowercaseCount(str){

//console.log((str.match(/[a-z]/g) || []).length );

    str = str.split("");  
     let counter = 0;
    str.forEach(element => { element == element.toLowerCase()  && element.match(/[a-z]/)  ?    counter += 1 : counter += 0; 
 
    });
console.log(counter);
return counter;

}


lowercaseCount("abc")//, 3);
lowercaseCount("abcABC123");// 3);
lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~");// 3);
lowercaseCount("");// 0);
lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~")//, 0)
lowercaseCount("abcdefghijklmnopqrstuvwxyz")//, 26);