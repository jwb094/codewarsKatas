function splitAndMerge(string, separator) {

    //console.log(string.split(" ").map(word => word.split("").join(separator)).join(" "));

    return string.split(" ").map(word =>word.split("").join(separator)).join(" ");
    // var words=string.split("");
    // console.log("use split():",words);
    // for (let index = 0; index < words.length; index++) {
        
        
    // }
    // var s=words.join(separator);
    // console.log("use join():",s);
}

  console.log(splitAndMerge("My name is John"," "));//. "M y n a m e i s J o h n");
  console.log(splitAndMerge("My name is John","-"));//. "M-y n-a-m-e i-s J-o-h-n");
  console.log(splitAndMerge("Hello World!","."));//. "H.e.l.l.o W.o.r.l.d.!");
  console.log(splitAndMerge("Hello World!",","));//. "H,e,l,l,o W,o,r,l,d,!");