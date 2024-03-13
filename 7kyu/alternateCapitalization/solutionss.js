function capitalize(string){


    let output = [], arrays = [];
    let s_split = string.split("");
    for (let i = 0; i <= 1; i++) {
    for (let n = 0; n < s_split.length; n++) {
        if (i == 0) {
            (n  % 2 === 0 ) ? output.push(s_split[n].toUpperCase()) : output.push(s_split[n])
        }
        if (i === 1) {
            (n  % 2 !== 0 ) ? output.push(s_split[n].toUpperCase()) : output.push(s_split[n])
        }
    }
}

for (let i = 0; i < output.length; i += string.length){
   arrays.push(output.slice(i, i + string.length).join(""));
}
    return arrays;
  };


console.log(capitalize("abcdef"));//,['AbCdEf', 'aBcDeF']);
//onsole.log(capitalize("codewars"));//,['CoDeWaRs', 'cOdEwArS']);
//console.log(capitalize("abracadabra"));//,['AbRaCaDaBrA', 'aBrAcAdAbRa']);
//console.log(capitalize("codewarriors"));//,['CoDeWaRrIoRs', 'cOdEwArRiOrS']);