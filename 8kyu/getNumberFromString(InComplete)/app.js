function getNumberFromString(s) {
    //return 0;
    //console.log();
    let output =  s.match(/(\d+)/g)[0];

    //return Number(output);
return Number(s.match(/(\d+)/g)[0]);
//console.log(typeof output);
//return output;
  //  console.log(output);
  }


  console.log(getNumberFromString("1"));
  console.log(getNumberFromString("123"));
  console.log(getNumberFromString("this number is :7"));