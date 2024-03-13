function grabDoll(dolls){
    var bag=[];
    //coding here
    for (let index = 0; index < dolls.length; index++) {
        if ( dolls[index].includes("Hello Kitty") || dolls[index].includes("Barbie doll")) {
            bag.push(dolls[index]);
        } 
        if (bag.length == 3) {
            break;
        }continue ;
    } 
    return bag;
  }
//conitnue = stay in the loop
//break = leave loop
  console.log(grabDoll(["Mickey Mouse","Hello Kitty","Snow white"]));//,["Hello Kitty"]);
  console.log(grabDoll(["Mickey Mouse","Hello Kitty","Hello Kitty","Snow white"]));//,["Hello Kitty","Hello Kitty"]);
  console.log(grabDoll(["Mickey Mouse","Hello Kitty","Hello Kitty","Barbie doll","Snow white"]));//,["Hello Kitty","Hello Kitty","Barbie doll"]);
  console.log(grabDoll(["Mickey Mouse","Barbie doll","Hello Kitty","Hello Kitty","Hello Kitty","Snow white"]));//,["Barbie doll","Hello Kitty","Hello Kitty"]);