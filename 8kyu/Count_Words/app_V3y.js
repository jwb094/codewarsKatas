// function countWords(str) {
//     // ...
//     //str= str.replace(/\s/g, "");
//     //str.replace(/^[ ]+/g, "");
// let res = [] ;
//     //
// //console.log(str);
//     str.replace('/[^\s\\]/',' ');
//     str.replace(/[,.*!'+?^${}()|[\]\\]/g, '');
    

//     str = str.split(" ");
//     const result = str.filter((word) => word.length > 0);

//     return result.length;
//     console.log(result);

//     // for (let index = 0; index < str.length; index++) {

//     //     //console.log(str[index].length);
//     //      if (str[index].length !== 0) {
//     //             res.push(str[index]); 
//     //      }
//     // }
//     // console.log(res);
//     // return res.length;
//   }
//   str.replace(/\n/g, " ");s
// str.replace(/[\u00A0\u1680​\u180e\u2000-\u2009\u200a​\u200b​\u202f\u205f​\u3000]/g,'');

function cWords(str){
//     let res = [] ;
//    str = str.split(/\s/);
//     str.filter((word) => word.length !== 0 );
//     console.log(str);
//      return res.length;
return  str.split(/\s/).filter((word) => word.length !== 0 ).length;
}


//const cWords = str => str.split(/\s/).filter(element => element).length;
console.log(cWords("Hello"));//1
console.log(cWords("Hello, World!"));//2
console.log(cWords("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."));//19
console.log(cWords(""));//0
console.log(cWords("With! Symbol@ #Around! (Every) %Word$"));//5
console.log(cWords("Dear   Victoria, I love  to press   space button."));//8

console.log(cWords("Arthur"));//1
console.log(cWords("   David"));//2
console.log(cWords("Nelson "));//1
console.log(cWords("  Hello Gomer  "));//2
console.log(cWords("  Hello     Bart  "));//2

console.log(cWords("Hello﻿World "));//2
console.log(cWords("Hello﻿World "));//2
console.log(cWords("100% Responsive!"));//2