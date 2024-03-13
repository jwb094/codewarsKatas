function fiveLine(s){
    //coding here...
    
    var str = "";
    n=1;
    do {
        if (n != 1 || n!= 5) {
            console.log(n);
            str += `${s.trim().repeat(n)}`+`\\n`;
          //  console.log(str);
           // n++;
        }
        str += `${s.trim().repeat(n)}`;
        console.log(n);
       // console.log(`${s.repeat(n)}\n`);
       // str += `${s.trim().repeat(n)}`+`\\n`;
        console.log(str);
        n++;
    } while (n <= 5);
  //  console.log(`${s}\n`);
    return str;
  }


 console.log(fiveLine("  a"));// , "a\naa\naaa\naaaa\naaaaa");
 console.log(fiveLine("\txy \n"));// , "xy\nxyxy\nxyxyxy\nxyxyxyxy\nxyxyxyxyxy");
 console.log(fiveLine("           Ok               "));// , "Ok\nOkOk\nOkOkOk\nOkOkOkOk\nOkOkOkOkOk");