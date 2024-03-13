function countConsonants(str) {
console.log( new Set(str.toLowerCase().replace(/[^a-z]|[aeiou]/g,"")).size );


//return [...new Set(str.replace(/[^a-z]/gi,'').toLowerCase().split(''))].join('').replace(/[aeiou]/gi,"").length;
    //console.log(str.toLowerCase().replace(/[aeiou]/gi,""));
  /** - ATTEMPT 2
   *    str =[...str.toLowerCase().replace(/[aeiou0-9]/gi,"")];
     str.filter(function(item,pos){
        return str.indexOf(item) == pos;
      }).join().replaceAll(",","");
      return new Set([...str]).size;*/
//     let total = new Set([...str]).size;
// console.log(total);
    //console.log(str);
    // Your code here!
 /* let Consonants = [];
  str = str.toLowerCase();
  for (let index = 0; index < str.length; index++) {
  
    str[index].match(/[^aeiou0-9]/gi, "") ?  Consonants.push(str[index]) : null;
  }

  UniqueConstantsArray = str.filter(function(item,pos){
    return str.indexOf(item) == pos;
  })
  console.log(UniqueConstantsArray);
return UniqueConstantsArray.length;*/
}


console.log(countConsonants("sillystring"));
console.log(countConsonants("6ENQg"));
console.log(countConsonants("OgGwI"));
console.log(countConsonants("PXkSs"));//4
console.log(countConsonants("9xggX"));//2
console.log(countConsonants(""));
