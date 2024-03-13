function enough(cap, on, wait) {
    // your code here
       return (cap  > (on + wait))  ?  0 : Math.abs((on + wait) - cap); 

}

console.log(enough(10, 5, 5));//0
console.log(enough(100, 60, 50));//10
console.log(enough(20, 5, 5));//0
