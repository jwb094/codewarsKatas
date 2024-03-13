function points(games) {
  /*let total = 0;
   for (let index = 0; index < games.length; index++) {
    let x = Number(games[index].split("").shift());
    let y = Number(games[index].split("").pop());
    (x > y) ? total =+ total + 3 :  (x < y) ? total =+ total + 0 : (x === y) ? total =+ total + 1: null;

   }
   return total;
*/
  // let total = 0;
  // let i = 0;
  // do {
  //   let x = Number(games[i].split("").shift());
  //   let y = Number(games[i].split("").pop());
  //   x > y
  //     ? (total = +total + 3)
  //     : x < y
  //     ? (total = +total + 0)
  //     : x === y
  //     ? (total = +total + 1)
  //     : null;
  //   i++;
  // } while (i < games.length);
  // return total;


  // const sumWithInitial = games.reduce(
  //   (accumulator, currentValue) => console.log(`${accumulator} ${currentValue}`),
  //   initialValue = 0,
  // );


  // const s = games.reduce(function(accumulator, currentValue){
  //   total = 0;
  //   //console.log(`${currentValue}`)
  //   let x =Number(currentValue.split("").shift());
  //   let y =Number(currentValue.split("").shift());
  //   // console.log(`${x}`)
  //   (x > y) ? total =+ total + 3 :  (x < y) ? total =+ total + 0 : (x === y) ? total =+ total + 1: null;
  //   console.log(total);
  // } );

  // console.log(s)
}

console.log(points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"])); //30
console.log(points(["1:1", "2:2", "3:3", "4:4", "2:2", "3:3", "4:4", "3:3", "4:4", "4:4"])); //10
console.log(points(["0:1", "0:2", "0:3", "0:4", "1:2", "1:3", "1:4", "2:3", "2:4", "3:4"])); //0
console.log(points(["1:0", "2:0", "3:0", "4:0", "2:1", "1:3", "1:4", "2:3", "2:4", "3:4"])); //15
console.log(points(["1:0", "2:0", "3:0", "4:4", "2:2", "3:3", "1:4", "2:3", "2:4", "3:4"])); //12
