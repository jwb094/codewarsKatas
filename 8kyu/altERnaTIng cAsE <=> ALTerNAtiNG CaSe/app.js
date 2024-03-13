String.prototype.toAlternatingCase = function () {
    // Define your method here :)
    
console.log(this.split(""));
    this = this.split("");
    for (let index = 0; index < this.length; index++) {
   
 
        //this[index]=  ( this[index] === this[index].toLowerCase()) ? this[index].toUpperCase() : this[index].toLowerCase(); 
        //console.log(this[index].toLocaleLowerCase()+);
        //console.log(this[index] == this[index].toUpperCase());
        this[index] = (this[index] == this[index].toUpperCase()) ? this[index] == this[index].toLowerCase() : this[index] == this[index].toUpperCase() ;
        console.log(this[index]);
    }

    // for (let char of this) {

    //     //(condition) ? : ;
    //     console.log(char == char.toUpperCase()+'s');

    //   }
    // for (key in this) {
    //     console.log(this[key]);
    //     this[key] =  ( this[key] === this[key].toUpperCase()) ? this[key] : this[key].toLower; 
    // }

    //return this.split("");
    return this;
  }


  console.log("hello world".toAlternatingCase());