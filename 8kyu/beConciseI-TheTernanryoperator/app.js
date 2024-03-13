
// TODO: Refactor and shorten the function

function describeAge(age) {
const msg= "You're a(n)";
//   return   (age <= 12) ? `${msg} kid` :(age >= 13 && age <= 17) ? `${msg} teenager`: (age >= 18 && age <= 64) ? `${msg} adult`: `${msg} elderly`;
   return `You're a(n)${(a<=12)?`kid`:(a>=13&&a<=17)?`teenager`:(a>=18&&a<= 64)?`adult`:`elderly` }`; 
   
   if (age <= 12) {
      return "You're a(n) kid";
    } else if (age >= 13 && age <= 17) {
      return "You're a(n) teenager";
    } else if (age >= 18 && age <= 64) {
      return "You're a(n) adult";
    } else {
      return "You're a(n) elderly";
    }


  }


console.log(describeAge(9));//, "You're a(n) kid");
console.log(describeAge(10));//, "You're a(n) kid");
console.log(describeAge(11));//, "You're a(n) kid");
console.log(describeAge(12));//, "You're a(n) kid");
console.log(describeAge(13));//, "You're a(n) teenager");
console.log(describeAge(14));//, "You're a(n) teenager");
console.log(describeAge(15));//, "You're a(n) teenager");
console.log(describeAge(16));//, "You're a(n) teenager");
console.log(describeAge(17));//, "You're a(n) teenager");
console.log(describeAge(18));//, "You're a(n) adult");
console.log(describeAge(19));//, "You're a(n) adult");
console.log(describeAge(63));//, "You're a(n) adult");
console.log(describeAge(64));//, "You're a(n) adult");
console.log(describeAge(65));//, "You're a(n) elderly");
console.log(describeAge(66));//, "You're a(n) elderly");
console.log(describeAge(100));//, "You're a(n) elderly");