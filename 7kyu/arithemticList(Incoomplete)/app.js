var seqlist = function(first,c,l){
    // Thou shalt begin !
    let aList = [];
    for (let index = first; index < l; index = index + c ) {
        aList.push(index);
    }
     return aList;
}

console.log(seqlist(0,1,20));