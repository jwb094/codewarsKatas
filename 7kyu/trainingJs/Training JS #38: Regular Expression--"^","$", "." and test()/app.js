function findSimilarity(str,word){

    console.log(str.split(" ").filter((l) => l.length === word.length ).filter((l) => l.match(`(^[${word[0]}])`)).filter((l) => l.match(`([${word.slice(-1)}]$)`),"ig").join(" ") );

    const StrWithTheSameLength = str.split(" ").filter((l) => l.length === word.length );
   // console.log(StrWithTheSameLength);
    const StrsThatBeginwithSameFirstLetter = StrWithTheSameLength.filter((l) => l.match(`(^[${word[0]}])`) )
   // console.log(StrsThatBeginwithSameFirstLetter);
    const StrsThatBeginwithSameeLastLetter = StrsThatBeginwithSameFirstLetter.filter((l) => l.match(`([${word.slice(-1)}]$)`),"ig");
    //console.log(StrsThatBeginwithSameeLastLetter);
    return StrsThatBeginwithSameeLastLetter.join(" ");
  //  console.log(str.match(new RegExp(/(^[d]).([g$])/,"i")));


  //pattern = /(^[d]).([g$])/;
  //console.log(`(^[${word[0]}]).([${word.slice(-1)}]$)`);
  //console.log(str.split(" ").filter((l) => l.match(`(^[${word[0]}])`) ));   
  //console.log(str.split(" ").filter((l) => l.match(`([${word.slice(-1)}]$)`),"ig") );   
  //console.log(str.split(" ").filter((l) => l.length === word.length ));   


   // console.log(str.search(/(${word[0]}).${word.slice(-1)}/ig));
    //coding here...

    ///console.log(str.split(" ").filter((l) => l.match(new RegExp(word,"i"))));    
 
   // console.log(str.split(" "));
//    console.log(word[0]);   
//    console.log(word.slice(-1)); 
    // const pattern = `/(^[${word[0]}]).([${word.slice(-1)}$])/`;
    // console.log(pattern);
    // str = str.split(" ");
    // str.forEach(element => {
    //     //console.log(element.search(/(${word[0]}).${word.slice(-1)}/i));
    //     console.log(element.match(new RegExp(pattern,"g")));
    // });
    // for (const key in str) {

    // }
}


console.log(findSimilarity("bag dog dig dot doog dogs","dog") );//, "dog dig");
console.log(findSimilarity("bag dog dig dot doog dogs","dig") );//, "dog dig");
console.log(findSimilarity("bag dog dig dot doog dogs","dot") );//, "dot");
console.log(findSimilarity("bag dog dig dot doog dogs","god") );//, "");
console.log(findSimilarity("vRllN QRo cUz gdI SImLC fyQhN Gzi PWzja SxTdC VlQ SdmKC ImF","SWyfC") );//, "SImLC SxTdC SdmKC");