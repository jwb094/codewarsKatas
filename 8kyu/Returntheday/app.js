function whatday(num) { 

    // put your code here
  
      const DB = { 1 : "Sunday", 2:"Monday" , 3: "Tuesday", 4: "Wednesday", 5:"Thursday", 6: "Friday",7: "Saturday"};
      const pairs = Object.entries(DB);
      let chosenLang= "";
      pairs.forEach(element => {
          if ( element[0] == num ) {
              chosenLang =  element[1];
          } 
      });
      console.log(chosenLang.length);
  
      return chosenLang ==  "" ? "Wrong, please enter a number between 1 and 7" : chosenLang;
  
  }

console.log(whatday(1));
console.log(whatday(3));
console.log(whatday(8));