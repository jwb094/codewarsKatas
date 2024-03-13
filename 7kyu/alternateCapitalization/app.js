function capitalize(string){

   // console.log(s.length);

    // for (let i = 0; i <= 1; i++) {
    //     // const element = array[i];
    //    // console.log(string.split("").length);
    //     let s_split = string.split("");
    //     for (let n = 0; n >= s_split.length; n++) {
    //         console.log( i);
    //         console.log(n % i === 0);
    //        // s_split[n] =  (n  % i === 0 ) ? s_split[n].toUppercase() : s_split[n];
    // }
    // }
    let output = [];
    let s_split = string.split("");
    //console.log(s_split.length);
    for (let i = 0; i <= 1; i++) {
    for (let n = 0; n < s_split.length; n++) {
       // console.log(n);
      //  console.log(`${n}`+ n  % 2 );
        //console.log(s_split[n].toUpperCase());
        if (i == 0) {
            (n  % 2 === 0 ) ? output.push(s_split[n].toUpperCase()) : output.push(s_split[n])
        }

        if (i === 1) {
            (n  % 2 !== 0 ) ? output.push(s_split[n].toUpperCase()) : output.push(s_split[n])
        }
       
       // s_split[n] =  (n  % 2 === 0 ) ? s_split[n].toUppercase() : s_split[n];
    

    }
}
//console.log(output);
var arrays = [];
for (let i = 0; i < output.length; i += string.length){
  //  console.log(i);
   arrays.push(output.slice(i, i + string.length).join(""));
}
   //console.log(arrays);
    return arrays;
  };


console.log(capitalize("abcdef"));//,['AbCdEf', 'aBcDeF']);
console.log(capitalize("codewars"));//,['CoDeWaRs', 'cOdEwArS']);
console.log(capitalize("abracadabra"));//,['AbRaCaDaBrA', 'aBrAcAdAbRa']);
console.log(capitalize("codewarriors"));//,['CoDeWaRrIoRs', 'cOdEwArRiOrS']);