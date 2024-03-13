function cookie(str){
    // ...
    console.log(typeof str);
    let statement = "Who ate the last cookie? It was";
    let person ="";
    if (typeof str === 'string') {
        person = "Zach !";
    } else if (typeof str === 'number') {
        person = "Monica !";
    }else {
        person = "the dog !";
    }
   // return `${statement}  ${person}`;

    var result = (typeof str === 'string') ?  "Who ate the last cookie? It was Zach" : ((typeof str === 'number') ? "Who ate the last cookie? It was Monica" : ("Who ate the last cookie? It was the Dog"));
    return result;
    //return `${statement}  ${person}`;
  }

  function cookie(str){
    var result = (typeof str === 'string') ?  "Who ate the last cookie? It was Zach!" : ((typeof str === 'number') ? "Who ate the last cookie? It was Monica!" : ("Who ate the last cookie? It was the dog!"));
    return result;
}

console.log(cookie("Ryan"));
console.log(cookie(26));
console.log(cookie(2.3));
console.log(cookie(true));
  // string = Zach
  // float OR int = Monica
// Else = dog