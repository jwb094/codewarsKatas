function getMiddle(s)
{   //console.log(s.length % 2 === 0 ? 2 : 1);
   // console.log(parseInt(s.length / 2 - 1 ));
     //

     if (s.length %  2 ===0 )  {
        console.log(s.length / 2 -1);
     }
    //console.log(s.substr(parseInt(s.length / 2), s.length % 2 === 0 ? 2 : 1));



    return s.length % 2 === 0 ? s.substr(s.length / 2 - 1, s.length % 2 === 0 ? 2 : 1) : s.substr(s.length / 2 , s.length % 2 === 0 ? 2 : 1);
    // if (s.length % 2 == 0) {
        
    // } else {
        
    // }
  //Code goes here!
}

console.log(getMiddle("test"));//"es"
console.log(getMiddle("testing"));//"t"
console.log(getMiddle("middle"));//"dd"
console.log(getMiddle("A"));//"A"