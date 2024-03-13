function findSimilarity(str,word){


    return  str.split(" ").filter((l) => l.length === word.length ).filter((l) => l.match(`(^[${word[0]}])`)).filter((l) => l.match(`([${word.slice(-1)}]$)`),"ig").join(" ");

}


console.log(findSimilarity("bag dog dig dot doog dogs","dog") );//, "dog dig");
console.log(findSimilarity("bag dog dig dot doog dogs","dig") );//, "dog dig");
console.log(findSimilarity("bag dog dig dot doog dogs","dot") );//, "dot");
console.log(findSimilarity("bag dog dig dot doog dogs","god") );//, "");
console.log(findSimilarity("vRllN QRo cUz gdI SImLC fyQhN Gzi PWzja SxTdC VlQ SdmKC ImF","SWyfC") );//, "SImLC SxTdC SdmKC");