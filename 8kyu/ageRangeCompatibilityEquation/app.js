function datingRange(age){
    //return min-max
 //console.log(age  / 2 + 7)
 //console.log((age  - 7) *2 )
 //console.log((age -7) * 2)
//    return `${Math.floor(age  -  0.10 * age)}-${Math.floor(age  + 0.10 * age)}`;


    return (age <= 14) ? `${age-0.10*age}-${age+0.10*age}` : `${Math.floor(age  / 2 + 7)}-${Math.floor((age  - 7) *2) }` ;
  }



console.log(datingRange(17));//, "15-20")
console.log(datingRange(40));//, "27-66")
console.log(datingRange(15));//, "14-16")
console.log(datingRange(35));//, "24-56")
console.log(datingRange(10));//, "9-11")