 function countWords(str) {
     console.log(str.replace(/\s/g, "").split("/\s+/"));
    //.filter(element => element).length;
//     // ...
//     //str= str.replace(/\s/g, "");
//     //str.replace(/^[ ]+/g, "");
// let res = [] ;
//     //
// //console.log(str);
//   //  str.replace('/[^\s\\]/',' ');
//    // str.replace(/[,.*!'+?^${}()|[\]\\]/g, '');
//     //str.replace('/\S+/g', "");
//     //str.split('[\f\n\r\t\v\u0020\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]');
//     //str.replace(/\n/g, " ");
//     //str.replace(/[\u00A0\u1680​\u180e\u2000-\u2009\u200a​\u200b​\u202f\u205f​\u3000]/g,'');
//     //  str = str.trim();
//     //str.replace("/\S+/g'");
//     str.split("/\s/").filter(element => element).length;


//     console.log(str);
//     for (let index = 0; index < str.length; index++) {

//         //console.log(str[index].length);
//          if (str[index].length !== 0) {
//                 res.push(str[index]); 
//          }
//     }
//     console.log(res);
//     return res.length;
}



//   str.replace(/\n/g, " ");s
// str.replace(/[\u00A0\u1680​\u180e\u2000-\u2009\u200a​\u200b​\u202f\u205f​\u3000]/g,'');
console.log(countWords("Hello"));//1
console.log(countWords("Hello, World!"));//2
console.log(countWords("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."));//19
console.log(countWords(""));//0
console.log(countWords("With! Symbol@ #Around! (Every) %Word$"));//5
console.log(countWords("Dear   Victoria, I love  to press   space button."));//8

console.log(countWords("Arthur"));//1
console.log(countWords("   David"));//2
console.log(countWords("Nelson "));//1
console.log(countWords("  Hello Gomer  "));//2
console.log(countWords("  Hello     Bart  "));//2

console.log(countWords("Hello﻿World "));//2
console.log(countWords("Hello﻿World "));//2
console.log(countWords("100% Responsive!"));//2