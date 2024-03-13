function reverseSlice(str) {
let output = []
    for (let index = 0; index < str.length; index++) {
      
        output.push(str.split("").reverse().join("").slice(index,str.length))
    }
   // console.log(output);
    return output;
  }


  console.log(reverseSlice('123'))
  console.log(reverseSlice('abcde'))