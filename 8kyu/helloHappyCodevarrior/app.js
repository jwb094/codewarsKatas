class Warrior{
  constructor(n) {
    this.n = n;
    }

    //name = n;  
    name = function(n){
      //console.log(this.n)
      if(n){
        this.n = n;
      }
      return this.n;
      //return  n ? n : this.n;
    }
    
    toString (){
      return "Hi! my name's "+this.name();
  }
  
  }

var albert = new Warrior("Albert");
var boris  = new Warrior("Boris");
//  console.log(albert = new Warrior("Albert"));

  //  console.log(albert.toString());
  //  console.log(albert.name());

  // console.log(boris.toString());
  console.log(boris.name());
  console.log(boris.name("Bobo"));