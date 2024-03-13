function firstToLast(str,c){

  //  console.log(str.search(c));
   //// console.log(str.lastIndexOf(c));
   var first =str.indexOf(c), last =str.lastIndexOf(c);
   var length = last-first;
   return str.includes(c)? length : str.indexOf(c);
   console.log(str.includes(c)? length : str.indexOf(c));
//console.log(str.lastIndexOf(c),str.indexOf(c))
//console.log(str.lastIndexOf(c)-str.indexOf(c))
//return str.lastIndexOf(c)-str.indexOf(c)
    // if (str.indexOf(c) < str.lastIndexOf(c)) { return str.lastIndexOf(c)}
    // if (str.indexOf(c) === str.lastIndexOf(c) && str.indexOf(c) !== -1 && str.lastIndexOf(c) !== -1 ) { return 0 }
    // else{
    //     return -1
    // }
   // if (str.search(c) > 0 && str.lastIndexOf(c) > 0) { return -1 }

    // (str.search(c) < str.lastIndexOf(c)) ? str.lastIndexOf(c) :false ;
    // (str.search(c) === str.lastIndexOf(c)) ? true:false ;
    // (str.search(c) < 0 && str.lastIndexOf(c) < 0) ? true:false ;
  }  
  console.log(firstToLast("ababc","a") );//, 2);
console.log(firstToLast("ababc","c") );//, 0);
console.log(firstToLast("ababc","d") );//, -1);