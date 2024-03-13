function tripleTrouble(one, two, three){
    //Solution
    let arr = [];
    //var str = " ";
   // let arr = " ";
    //console.log(one.split(""));
    // console.log(two.split(""));
    // console.log(three.split(""));

    one = one.split("");
    two = two.split("");
    three = three.split("");

  //  arr = arr.concat(one,two,three);
    console.log(one);
     console.log(two);
    console.log(three);
    for (let index = 0; index < one.length; index++) {
        // const element = array[index];
        // one[index] =+ two[index],three[index];
     //   console.log(one[index],two[index],three[index]);
        //arr += one[index],two[index],three[index];
        //arr += one[index],two[index],three[index];
       //arr.concat(one[index],two[index],three[index]);
//console.log(two[index]);
            arr.push(one[index],two[index],three[index]);

// arr += one[index],two[index],three[index];
        console.log(arr);
   }
   console.log(arr);
   //return arr;
   return arr. join("");
}


console.log(tripleTrouble("aaa","bbb","ccc"));