function SubstringTest(str1,str2){
    const arrStr1=[];
    const arrStr2=[];

    for (let i = 0; i< str1.length-1; i++) {
        arrStr1.push(str1.toLowerCase().slice(i,i+2));
    }
    for (let i = 0; i< str2.length-1; i++) {
        arrStr2.push(str2.toLowerCase().slice(i,i+2));
       
   
    }
    return arrStr1.filter(v=> arrStr2.includes(v)).length > 0 ;

    //console.log(arr);
  //  console.log(arr1);
}

console.log(SubstringTest("Something", "Home"));
console.log(SubstringTest("Something", "Fun"));
console.log(SubstringTest("Something", "in"));