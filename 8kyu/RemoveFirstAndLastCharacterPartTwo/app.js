// function array(string) {
//       console.log(string.split(",").length);     
//     //console.log(string.split(",").slice(1,-1).join(" "));      
//   string =  string.split(",");
//      if ( string.length < 3) {
//          return null;
//     } else {
  
//         string.shift();
//         string.pop();
//         return string.join("");
//     }
//   }


  
   function array(string) {
    //console.log(string.split(",").slice(1,-1).join(" "));      

   return  (string.split(",").length < 3) ? null : string.split(",").slice(1,-1).join(" "); 
//   string =  string.split(",");
//      if ( string.length < 3) {
//          return null;
//     } else {
  
//         string.shift();
//         string.pop();
//         return string.join("");
//     }
  }
 
   


console.log(array(' '));
console.log(array('1',));
console.log(array('A1,B2'));


console.log(array('1,2,3'));
console.log(array('1,2,3,4'));
console.log(array('A1,B2,C3,D4,E5'));
console.log(array('A,1,23,456,78,9,Z'));