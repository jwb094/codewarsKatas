function fiveLine(s){
    //coding here...
    var str = ``;
//    s =s.trim();
    for (let index = 1; index <= 5; index++) {
            if (index === 5) {
          str += `${s.trim().repeat(index)}`;
          break;
      }
      str += `${s.trim().repeat(index)}`+`\\n`;

    //   if (index === 5) {
    //   str += `\\n`+`${s.trim().repeat(index)}`;
    //   } else{
    //     str += `${s.trim().repeat(index)}`;
    // }

  }
  return str;
}


 console.log(fiveLine("  a"));// , "a\naa\naaa\naaaa\naaaaa");
 console.log(fiveLine("\txy \n"));// , "xy\nxyxy\nxyxyxy\nxyxyxyxy\nxyxyxyxyxy");
 console.log(fiveLine("           Ok               "));// , "Ok\nOkOk\nOkOkOk\nOkOkOkOk\nOkOkOkOkOk");