function sortIt(list, n) {
    //...
 //   console.log(list.split(",").sort(function(a,b) { console.log( `${a[n].charCodeAt()}` ) }));

    return list.split(", ").sort(function(a,b) { a[n-1] === b[n-1] ? 0 : a[n-1] > b[n-1] ? 1 : -1;}).join(" ");


   }


 console.log(sortIt('bill, bell, ball, bull', 2));//,'ball, bell, bill, bull' , 'Sort by the second letter')
 console.log(sortIt('cat, dog, eel, bee', 3));//,'bee, dog, eel, cat' , 'Sort by the third letter')