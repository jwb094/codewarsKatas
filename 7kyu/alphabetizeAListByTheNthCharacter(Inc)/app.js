function sortIt(list, n) {
    //...
 //   console.log(list.split(",").sort(function(a,b) { console.log( `${a[n].charCodeAt()}` ) }));

    console.log(list.split(", ").sort(function(a,b) {  
    //    a[n-1].charCodeAt() >  b[n-1].charCodeAt() ? 1 : -1
        // console.log(b[n-1])
      // return a[n-1].charCodeAt() -  b[n-1].charCodeAt()
     // return a[n-1] > b[n-1] ? 1 : -1;
     console.log(a[n-1].charCodeAt() >  b[n-1].charCodeAt())
    return  a[n-1].charCodeAt() ===  b[n-1].charCodeAt()  ?  a.localeCompare(b) :  a[n-1] - b[n-1];

    }).join(" "));

//     var strArr = list.split(", ");

//     var newArr = strArr.sort(function(a,b) {  
 
//         if (a[n-1] === b[n-1]) { return 0}
//         else if (a[n-1] > b[n-1]) { return 1 }
//         else { return -1}
//     });
//    return newArr.join(", ");
//     console.log(newArr);
   }


 console.log(sortIt('bill, bell, ball, bull', 2));//,'ball, bell, bill, bull' , 'Sort by the second letter')
 console.log(sortIt('cat, dog, eel, bee', 3));//,'bee, dog, eel, cat' , 'Sort by the third letter')