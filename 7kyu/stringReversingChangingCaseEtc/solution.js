function reverseAndMirror(s1,s2) {

    let s1_reversed = s1.split("").map((x)=> x === x.toLowerCase() ? x.toUpperCase() : x.toLowerCase()).reverse().join("");
    let s1_mirrored = s1_reversed.split("").reverse().join("");
    let s2_reversed = s2.split("").map((x)=> x === x.toLowerCase() ? x.toUpperCase() : x.toLowerCase()).reverse().join("");
    return `${s2_reversed.concat("@@@@")}${s1_reversed}${s1_mirrored}`;
  }


  function reverseAndMirror(s1,s2) {
    return `${s2.split("").map((x)=> x === x.toLowerCase() ? x.toUpperCase() : x.toLowerCase()).reverse().join("").concat("@@@@")}
            ${s1.split("").map((x)=> x === x.toLowerCase() ? x.toUpperCase() : x.toLowerCase()).reverse().join("")}
            ${s1.split("").map((x)=> x === x.toLowerCase() ? x.toUpperCase() : x.toLowerCase()).reverse().join("").split("").reverse().join("")}`;
  }



  console.log(reverseAndMirror(   s1 = "FizZ",s2 = "buZZ"));
//"zzUB@@@zZIffIZz"

  console.log(reverseAndMirror( s1 = "String Reversing",s2 = "Changing Case"));
  //"ESAc GNIGNAHc@@@GNISREVEr GNIRTssTRING rEVERSING"