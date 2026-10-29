function evil(n) {

let result  = n.toString(2).match(/1/g);
 if(result == null){
    return "It's Evil!";
  }
  return (result.length % 2 == 0 )? "It's Evil!":"It's Odious!";
}
console.log(evil(1));//"It's Odious!"
console.log(evil(2));//"It's Odious!"
console.log(evil(3));////"It's Evil!";