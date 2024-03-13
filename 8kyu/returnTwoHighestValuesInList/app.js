function twoHighest(arr) {
   // arr.sort(function(a,b){return a<b ? 1 : -1})
    return [...new Set(arr)].sort(function(a,b){return a<b ? 1 : -1}).splice(0,2);
    
    console.log(arr);

}


console.log(twoHighest([]));//, [])
console.log(twoHighest([15]));//, [15])
console.log(twoHighest([15, 20, 20, 17]));//, [20, 17])