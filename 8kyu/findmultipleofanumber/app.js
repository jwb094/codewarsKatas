function findMultiples(integer, limit) {
    //your code here
    let ans = [];
    // for (let index = 1; index <= limit ; index++) {
    //     ( index % integer  == 0) ? ans.push(index) : null;
    // }
    let index = 0;
    do {
        ( index % integer  == 0) ? ans.push(index) : null;        index++;
    }
    while (index <= limit );
    return ans;
  }
 console.log(findMultiples(5, 25));
 console.log(findMultiples(1, 2));
 console.log(findMultiples(5, 7));
 console.log(findMultiples(4, 27));