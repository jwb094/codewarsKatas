function strCount(str, letter){  
    //code here
        let counter =0;
     //   console.log(str.split(""));
        str =str.split("");
        str.forEach(element => {
            (element === letter) ? counter = counter + 1 : 0 ;
        });
        return counter;
        //console.log(counter);
  }

  console.log(strCount('Hello', 'l'));
  console.log(strCount('',      'z'));