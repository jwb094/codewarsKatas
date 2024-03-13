function points(games) {
   console.log(games);
let total = 0;
   for (let index = 0; index < games.length; index++) {
    console.log(games[index].split(""));
    let x = Number(games[index].split("").shift());
    let y = Number(games[index].split("").pop());
    // (x > y) ? total += total + 3 : false;
    // (x < y) ? total += total + 0 : false;
    // (x === y) ? total += total + 1: false;
    (x > y) ? total =+ total + 3 :  (x < y) ? total =+ total + 0 : (x === y) ? total =+ total + 1: null;
    console.log(total)
   }

}

function points(games) 
{
   let total = 0;
   let i = 0;
   do {
     let x = Number(games[i].split("").shift());
     let y = Number(games[i].split("").pop());
     x > y
       ? (total = +total + 3)
       : x < y
       ? (total = +total + 0)
       : x === y
       ? (total = +total + 1)
       : null;
     i++;
   } while (i < games.length);
   return total;
}

console.log(points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"]));
console.log(points(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"]));
