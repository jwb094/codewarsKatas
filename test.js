

function findNeedle(haystack) {
  // your code here
let result = 0;
  for (const key in haystack) {
     const value = haystack[key];
      if (value ==="needle") {
        result = key;
      } 
  }

return result !== 0 ? `found the needle at position  ${result}` : `Your function didn't return anything`;
}

var haystack_1 = ['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false];
var haystack_2 = ['283497238987234', 'a dog', 'a cat', 'some random junk', 'a piece of hay', 'needle', 'something somebody lost a while ago'];
var haystack_3 = [1,2,3,4,5,6,7,8,8,7,5,4,3,4,5,6,67,5,5,3,3,4,2,34,234,23,4,234,324,324,'needle',1,2,3,4,5,5,6,5,4,32,3,45,54];
var haystack_4 = [1,2,3,4,5,6,7,8,8,7,5,4,3,4,5,6,67,5,5,3,3,4,2,34,234,23,4,234,324,324,1,2,3,4,5,5,6,5,4,32,3,45,54];


console.log(findNeedle(haystack_1));
 console.log(findNeedle(haystack_2));
 console.log(findNeedle(haystack_3));
 console.log(findNeedle(haystack_4));function uniTotal (string) {
    // total up dem unicodes!
    console.log([...string]);
    return string.split("").reduce((acc, cV) => acc + cV.charCodeAt(),0);
    //console.log([...string]);

    
}


console.log(uniTotal(""));//, 0));
console.log(uniTotal("a"));//, 97);
console.log(uniTotal("b"));//, 98);
console.log(uniTotal("c"));//, 99);
console.log(uniTotal("d"));//, 100);
console.log(uniTotal("e"));//, 101);
console.log(uniTotal("aaa"));//, 291)
console.log(uniTotal("Mary Had A Little Lamb"));//, 1873);﻿/*function addLength1(str) {
    //start-here
    str = str.split(" ");
    let ans = [];
    str.forEach(element => {
        ans.push(`${element} `+ `${element.length}`);
    });
return ans;
    }
    

    console.log(addLength1('you will win'));
*/


    function addLength2(str) {
        //start-here
        str = str.split(" ");
        str = str.map( (s)  => console.log(s) );

    return ans;
        }
        
    
        console.log(addLength2('you will win'));﻿function strCount(str, letter){  
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
  console.log(strCount('',      'z'));const areaOrPerimeter = function(l , w) {
    // Return your answer
    
    return ( l == w)  ?  l * w : (l + w) *2 ;
  };function arrayPlusArray(arr1, arr2) {
    
    return (arr1.reduce((accumlator,currentValue) =>accumlator+currentValue) + arr2.reduce((accumlator,currentValue) =>accumlator+currentValue)) ;
    //return arr1 + arr2; //something went wrong
  }


  console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]))function basicOp(operation, value1, value2)
{
return eval( value1 + operation + value2);
    // console.log(value1 );
    // console.log(operation);
    // console.log(value2);
//console.log(eval( value1 + operation + value2));
//console.log(eval(value1 .operation. value2));
}

console.log(basicOp('+', 4, 7));

//console.log();﻿function paperwork(n, m) {
  return ( n < 0  || m < 0) ? 0 : n * m;
}
function binToDec(bin) {
    // TODO
    return parseInt(bin,2);
  }


//https://byby.dev/js-binary-to-decimal#:~:text=In%20JavaScript%2C%20you%20can%20use,number%20to%20a%20binary%20string.&text=The%20parseInt%20function%20takes%20a,returns%20an%20integer%20in%20decimal.
  console.log(binToDec('0'));
  console.log(binToDec('1'));
  console.log(binToDec('10'));
  console.log(binToDec('1001001'));﻿function findAverage(array) {
    // your code here
return  array.length !== 0 ? (array.reduce((accumulator, currentValue) => accumulator + currentValue )) / array.length : 0 ; 

    let sumWithInitial = (array.reduce((accumulator, currentValue) => accumulator + currentValue )) / array.length;

console.log(sumWithInitial);
//return 0;
  }


  console.log(findAverage([1,1,1]));
  console.log(findAverage([1,2,3]));
  console.log(findAverage([1,2,3,4]));//return price without vat
function excludingVatPrice(price){
    // your code
   // console.log( 230 / 100 * 15);
//  let VAT = Number(price  / 1.15).toFixed(2);
//  console.log(VAT);
//  return VAT !== null ? VAT : -1;

//return  Number(price  / 1.15).toFixed(2) > -1 ? Number(price  / 1.15).toFixed(2) : -1;


return price == null ?  -1 : Number((price  / 1.15).toFixed(2)) ;
    //console.log(VAT.toFixed(2));
    //return 0;

}

console.log(excludingVatPrice(230));//, 200.00)
console.log(excludingVatPrice(123));//, 106.96)
console.log(excludingVatPrice());function capitalizeWord(word) {
 //word=  word.toUpperCase();
 //console.log(word.charAt(0).toUpperCase()+ word.slice(1));
 //console.log(word.charAt(0).toUpperCase());
  return word.charAt(0).toUpperCase()+ word.slice(1);
}

console.log(capitalizeWord('word'));
console.log(capitalizeWord('i'));
console.log(capitalizeWord('glasswear'));class Person {
    constructor(name,age) {
        this.name = name;
        this.age =age;
    }

    // get Info() {
    //     return this.getInfo();
    //   }
    get info() {
        return `${this.name}s age is ${this.age}`;
    }

  }

  var john = new Person('john', 34)

  console.log(john.Info);﻿function toNumberArray(stringarray){
    return stringarray.map((x) => Number(x));
}

console.log(toNumberArray(["1.1","2.2","3.3"]));function countWords(str) {
    // ...
    //str= str.replace(/\s/g, "");
    //str.replace(/^[ ]+/g, "");
let res = [] ;
    //
//console.log(str);
    str.replace('/[^\s\\]/',' ');
    str.replace(/[,.*!'+?^${}()|[\]\\]/g, '');
    //str.replace('/\S+/g', "");
    str.split('[\f\n\r\t\v\u0020\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]');
    //str.replace(/\n/g, " ");
    //str.replace(/[\u00A0\u1680​\u180e\u2000-\u2009\u200a​\u200b​\u202f\u205f​\u3000]/g,'');
    //  str = str.trim();
    //str.replace("/\S+/g'");
    str = str.split(" ");



    for (let index = 0; index < str.length; index++) {

        //console.log(str[index].length);
         if (str[index].length !== 0) {
                res.push(str[index]); 
         }
    }
    console.log(res);
    return res.length;
  }
//   str.replace(/\n/g, " ");s
// str.replace(/[\u00A0\u1680​\u180e\u2000-\u2009\u200a​\u200b​\u202f\u205f​\u3000]/g,'');
console.log(countWords("Hello"));//1
console.log(countWords("Hello, World!"));//2
console.log(countWords("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."));//19
console.log(countWords(""));//0
console.log(countWords("With! Symbol@ #Around! (Every) %Word$"));//5
console.log(countWords("Dear   Victoria, I love  to press   space button."));//8

console.log(countWords("Arthur"));//1
console.log(countWords("   David"));//2
console.log(countWords("Nelson "));//1
console.log(countWords("  Hello Gomer  "));//2
console.log(countWords("  Hello     Bart  "));//2

console.log(countWords("Hello﻿World "));//2
console.log(countWords("Hello﻿World "));//2
console.log(countWords("100% Responsive!"));//2// function countWords(str) {
//     // ...
//     //str= str.replace(/\s/g, "");
//     //str.replace(/^[ ]+/g, "");
// let res = [] ;
//     //
// //console.log(str);
//     str.replace('/[^\s\\]/',' ');
//     str.replace(/[,.*!'+?^${}()|[\]\\]/g, '');
    

//     str = str.split(" ");
//     const result = str.filter((word) => word.length > 0);

//     return result.length;
//     console.log(result);

//     // for (let index = 0; index < str.length; index++) {

//     //     //console.log(str[index].length);
//     //      if (str[index].length !== 0) {
//     //             res.push(str[index]); 
//     //      }
//     // }
//     // console.log(res);
//     // return res.length;
//   }
//   str.replace(/\n/g, " ");s
// str.replace(/[\u00A0\u1680​\u180e\u2000-\u2009\u200a​\u200b​\u202f\u205f​\u3000]/g,'');

function cWords(str){
//     let res = [] ;
//    str = str.split(/\s/);
//     str.filter((word) => word.length !== 0 );
//     console.log(str);
//      return res.length;
return  str.split(/\s/).filter((word) => word.length !== 0 ).length;
}


//const cWords = str => str.split(/\s/).filter(element => element).length;
console.log(cWords("Hello"));//1
console.log(cWords("Hello, World!"));//2
console.log(cWords("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."));//19
console.log(cWords(""));//0
console.log(cWords("With! Symbol@ #Around! (Every) %Word$"));//5
console.log(cWords("Dear   Victoria, I love  to press   space button."));//8

console.log(cWords("Arthur"));//1
console.log(cWords("   David"));//2
console.log(cWords("Nelson "));//1
console.log(cWords("  Hello Gomer  "));//2
console.log(cWords("  Hello     Bart  "));//2

console.log(cWords("Hello﻿World "));//2
console.log(cWords("Hello﻿World "));//2
console.log(cWords("100% Responsive!"));//2 function countWords(str) {
     console.log(str.replace(/\s/g, "").split("/\s+/"));
    //.filter(element => element).length;
//     // ...
//     //str= str.replace(/\s/g, "");
//     //str.replace(/^[ ]+/g, "");
// let res = [] ;
//     //
// //console.log(str);
//   //  str.replace('/[^\s\\]/',' ');
//    // str.replace(/[,.*!'+?^${}()|[\]\\]/g, '');
//     //str.replace('/\S+/g', "");
//     //str.split('[\f\n\r\t\v\u0020\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]');
//     //str.replace(/\n/g, " ");
//     //str.replace(/[\u00A0\u1680​\u180e\u2000-\u2009\u200a​\u200b​\u202f\u205f​\u3000]/g,'');
//     //  str = str.trim();
//     //str.replace("/\S+/g'");
//     str.split("/\s/").filter(element => element).length;


//     console.log(str);
//     for (let index = 0; index < str.length; index++) {

//         //console.log(str[index].length);
//          if (str[index].length !== 0) {
//                 res.push(str[index]); 
//          }
//     }
//     console.log(res);
//     return res.length;
}



//   str.replace(/\n/g, " ");s
// str.replace(/[\u00A0\u1680​\u180e\u2000-\u2009\u200a​\u200b​\u202f\u205f​\u3000]/g,'');
console.log(countWords("Hello"));//1
console.log(countWords("Hello, World!"));//2
console.log(countWords("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."));//19
console.log(countWords(""));//0
console.log(countWords("With! Symbol@ #Around! (Every) %Word$"));//5
console.log(countWords("Dear   Victoria, I love  to press   space button."));//8

console.log(countWords("Arthur"));//1
console.log(countWords("   David"));//2
console.log(countWords("Nelson "));//1
console.log(countWords("  Hello Gomer  "));//2
console.log(countWords("  Hello     Bart  "));//2

console.log(countWords("Hello﻿World "));//2
console.log(countWords("Hello﻿World "));//2
console.log(countWords("100% Responsive!"));//2function countPositivesSumNegatives(input) {
    // your code here
    //ATTEMPT 2

    if(input === null || input.length == 0){
return  [] ;
    } else{
        let positive_counter =0;
        let negative_counterSUM =0;

        input.forEach(element => {
            if (Math.sign(element) == 1) {
              
                positive_counter++;
              
            }   else {
                negative_counterSUM = negative_counterSUM + element;
            }
        });
     return [positive_counter, negative_counterSUM];
    
    }
}
    //ATTEMPT 1
   /* let positive_counter =0;
    let negative_counterSUM =0;
    input.forEach(element => {
        if (Math.sign(element) == 1) {
          
            positive_counter++;
          
        }   else {
            negative_counterSUM = negative_counterSUM + element;
        } 
    });
    //console.log(positive_counter);
    //console.log(negative_counterSUM);
    return (input == (null || "")) ? [] : [positive_counter, negative_counterSUM];
    return [positive_counter, negative_counterSUM];*/


  console.log(countPositivesSumNegatives( [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));
  console.log(countPositivesSumNegatives( null));﻿function chromosomeCheck(sperm) {
  
    return sperm.includes("Y") ? "Congratulations! You're going to have a son." : "Congratulations! You're going to have a daughter." ;
}

console.log(chromosomeCheck('XY'));
console.log(chromosomeCheck('XX'));﻿function peopleWithAgeDrink(old) {
    let statment = "drink";
if (old < 14) {
    return `${statment} toddy`;
} else if (old >= 14 && old <= 17) {
    return `${statment} coke`;
} else if (old >= 18 && old <= 20) {
    return `${statment} beer`;
}  else {
    return `${statment} whisky`;
}


 
}

// console.log(peopleWithAgeDrink(13));
console.log(peopleWithAgeDrink(14));
// console.log(peopleWithAgeDrink(16));
// console.log(peopleWithAgeDrink(17));
// console.log(peopleWithAgeDrink(19));
// console.log(peopleWithAgeDrink(29));function joinStrings(string1, string2){
    // code here
   return `${string1} ${string2}`;
 }function firstNonConsecutive (arr) {
//console.log(arr.length);
let result = [];
for (let index =  0; index >= arr.length; index++) {
    console.log(arr[index]);
    if (arr[index] !== undefined) {
        console.log(arr[index]);
        if(arr[index] - arr[index-1] > 1 === true){
            result.push(arr[index]);break;
        }
        
    }

   // console.log(arr[index] - arr[index-1] > 1 === true ? arr[index] : null);
   

}
 result =(result < 1) ?  null : result[0];

return result;
console.log(result);
}


console.log(firstNonConsecutive([1,2,3,4,6,7,8]));
console.log(firstNonConsecutive([1,2,3,4]));
console.log(firstNonConsecutive([-6,-5,-4,-2,-1,1,2,3]));﻿class SmallestIntegerFinder {
    findSmallestInt(args) {
        console.log(args.sort(function(a,b) { return a- b}));
        let ans = args.sort(function(a,b) { return a- b})
        return ans[0];
      }
  }

  let sif = new SmallestIntegerFinder();

console.log(sif.findSmallestInt([78,56,232,12,8]));

function position(letter){
    alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
console.log(letter.charCodeAt()-96);
    console.log(alphabet.indexOf(letter));

    return "Position of alphabet: "+ (alphabet.indexOf(letter) +1);
}



console.log(position("a"));
console.log(position("z"));
console.log(position("e"));
function fuelPrice(litres, pricePerLitre) {
    // your code here vvv
    // Good luck with it!
    var discount = 0;
    var discountlimit = 0.25;
   
    //var Price = (litres * pricePerLitre).toFixed(2);
    for (var i = 0; i <= litres; i++) {
      if( i  === 2 ){
        discount = 0.05;
      }
      if( i === 4 ){
        discount = 0.10;
      }

      if( i === 6){
        discount = 0.15;
      }
      if( i === 8 ){
        discount = 0.2;
      }
      if( i === 10 ){
        discount = 0.25;
      }
      if (discount >= discountlimit) {
        return;
      }
    }
   //console.log(discount.toFixed(2));
    pricePerLitre = (pricePerLitre - discount);
    const ans = +(pricePerLitre * litres).toFixed(2);
    return  ans;
  }
//console.log(1.23  / 0.10 / 100);
console.log(fuelPrice(5, 1.23)); //5.65
console.log(fuelPrice(8, 2.5));//18.40
console.log(fuelPrice(5, 5.6));//27.50function fuelPrice(litres, pricePerLitre) {
    // your code here vvv
    // Good luck with it!
   
    //var Price = (litres * pricePerLitre).toFixed(2);
    for (i = 2; i <= 10; i+= 2) {
      if (litres >= i ) {
         pricePerLitre -= .05;
      }
    }

    return   (litres * pricePerLitre).toFixed(2);
  }
//console.log(1.23  / 0.10 / 100);
console.log(fuelPrice(5, 1.23)); //5.65
console.log(fuelPrice(8, 2.5));//18.40
console.log(fuelPrice(5, 5.6));//27.50class Person {
    // Get coding in ES6 :D
    constructor(firstName = "John",lastName = "Doe",age=0,gender="Male") {
        this.FirstName = firstName;
        this.LastName = lastName;
        this.Age = age;
        this.Gender = gender;
        }


        sayFullName = function(){
            return this.FirstName +" " +this.LastName;
        }

        firstName = function(){
            return this.FirstName;
        }

        lastName = function(){
            return this.LastName;
        }

        age (){
            return this.Age;
        }

        gender = function(){
            return this.Gender;
        }

        sayFullName = function(){
            return this.FirstName +" " +this.LastName;
        }


        greetExtraTerrestrials = function(raceName){
            return `Welcome to Planet Earth ${raceName}`;
        }




  }

  let john = new Person();
 console.log(john.firstName);
 console.log(john.lastName);
 console.log(john.age);
 console.log(john.gender);
 console.log(john.sayFullName());
 console.log(Person.greetExtraTerrestrials("Martians"));function getPlanetName(id){
    var name;
    switch(id){
      case 1:
        name = 'Mercury'
        break;
      case 2:
        name = 'Venus'
        break;
      case 3:
        name = 'Earth'
        break;
      case 4:
        name = 'Mars'
        break;
      case 5:
        name = 'Jupiter'
        break;
      case 6:
        name = 'Saturn'
        break;
      case 7:
        name = 'Uranus'
        break;
      case 8:
        name = 'Neptune';
        break;
        default:
            name = "our of range";
            break;
        
    }
    
    return name;
  }


  console.log(getPlanetName(2));function hero(bullets, dragons){
    //Get Coding!
    //console.log(bullets / 2);
   // console.log(bullets / dragons);
    return (bullets / 2) >= dragons  ? true : false;

}
    

console.log(hero(10, 5));//true
console.log(hero(7, 4));//false
console.log(hero(4,5));//false
console.log(hero(100,40));//true
console.log(hero(1500,751));//false﻿function greet(name){
     return  name !== "Johnny" ?  "Hello, " + name + "!" :  "Hello, my love!";
 }function match(candidate, job) {
    if ( !candidate.minSalary &&  !job.minSalary) {
        
    return false;
    } else{
        return candidate.minSalary <= job.maxSalary  ||  (  candidate.minSalary - (candidate.minSalary/ 100 * 10)  <= job.maxSalary);
    }
    

    /**
     * 
     *     try {
    return candidate.minSalary <= job.maxSalary  ||  (  candidate.minSalary - (candidate.minSalary/ 100 * 10)  <= job.maxSalary); 
} catch (error) {
    throw new error;
}
     */
// try {
//     if ( !candidate.minSalary ||  !job.minSalary) {
//         return false;
//     }  else{
//     return candidate.minSalary <= job.maxSalary  ||  (  candidate.minSalary - (candidate.minSalary/ 100 * 10)  <= job.maxSalary); 
//     }
// } catch (error) {
//      throw error;



 //return (candidate.minSalary <= job.maxSalary  ||  (  candidate.minSalary - (candidate.minSalary/ 100 * 10)  <= job.maxSalary) ) ? true :    throw "false";

    // try {
    //     candidate.minSalary <= job.maxSalary  ||  (  candidate.minSalary - (candidate.minSalary/ 100 * 10)  <= job.maxSalary) 
    //     return true;
    //   } catch (e) {
    //     return e; // TypeError: Can only add numbers
    //   }

}
let candidate1 = { minSalary: 120000 },
job1 = { maxSalary: 130000 },
job2 = { maxSalary: 80000 };


console.log(match(candidate1, job1));
console.log(match(candidate1, job2));﻿function setAlarm(employed, vacation){

 //return (employed == true  )  ? false : ((employed == false || vacation != false ?  true : false)); 

// var result = (employed == true ) ?  true: ((employed == false ? "Who ate the last cookie? It was Monica" : ("Who ate the last cookie? It was the Dog"));

if ((employed  === vacation )) {
    return false;
} else if ((employed == true) && ( vacation || vacation  == false)) {
           return true;
}  else if ((employed == false)) {
       return false;
}
}

console.log(setAlarm(true, true));//  false,"Should be false.");
console.log(setAlarm(false,true));//  false, "Should be false.");
console.log(setAlarm(true, false));// true// function pipeFix(numbers){
// // console.log(numbers.splice(0, 1).shift());
// // console.log(numbers.pop());
// console.log(numbers);
// const first =numbers.splice(0, 1).shift();
// const last =numbers.pop();

// for (let index = 1; index <= last; index++) {
//  //   const element = array[index];
// //  console.log(numbers.indexOf(index) );
// //  console.log(numbers.indexOf(index[index]));
// if (!numbers.includes(index)) {
//     numbers.push(index);
// }

//    // console.log(numbers[index]);
// }
// //console.log(numbers.sort(function(a, b){return a-b}));
// return numbers.sort(function(a, b){return a-b});
// }

function pipeFix(numbers) {

  const first = numbers.splice(0, 1).shift();
  const last = numbers.pop();
  for (let index = 1; index <= last; index++) {
    if (!numbers.includes(index)) {
      numbers.push(index);
    }
  }
   numbers.sort(function (a, b) {
    return a - b;
  });
  return numbers;
}

console.log(pipeFix([1, 2, 3, 5, 6, 8, 9]));
console.log(pipeFix([1, 2, 3, 12]));
﻿function makeUpperCase(str) {
    // Code here
    return str.toUpperCase();
  }function converter (mpg) {
    //code to convert miles per imperial gallon to kilometers per liter

   // console.log( (mpg * 4.54609188) / 1.6);
   // console.log( (Math.round(mpg /  4.54609188  ).toFixed(2))  1.609344 );
 //console.log((mpg / 4.54609188)  *  1.609344 );
    console.log( parseFloat(((mpg / 4.54609188)  *  1.609344).toFixed(2)) );
  //return ((mpg / 4.54609188)  *  1.609344).toFixed(2);
  }


  console.log(converter(10));
  console.log(converter(20));
  console.log(converter(30));function multipleOfIndex(array) {
//ATTEMPT 1
  //   var result = [];
//   for (const key in array) {
//     console.log(array[key]);
//     console.log(key);
//     if (array[key] % key == 0) {
//       result.push(array[key]);
//     } else {
//         if (array[key] == 0 && key == 0) {
//             result.push(array[key]);
//         }
//     }
//   }

//   return result;


//ATTEMPT @N****
return array.filter((value,index) => value % index == 0 || value == 0 & index == 0);

}

//console.log(multipleOfIndex([22, -6, 32, 82, 9, 25]));
//console.log(multipleOfIndex([68, -1, 1, -7, 10, 10]));
console.log(multipleOfIndex([0,2,3,6]));
function opposite(number) {
    //your code here

//Attempt 1
//     //console.log(number > 0);
//     let num = String(number);
//     if (num.includes("-")) {
//        // console.log("y");
//        num =num.replace("-", "");
//     } else {
//         //console.log("n");
//         num = "-"+ num;
//     }


//     //console.log(Number(num));
// return Number(num);

return -number;
  }


   console.log(opposite(1));
 console.log(opposite(3.3333333));
  console.log(opposite(-12525220.3325));function plural(n) {
    // ...

   return n < 1 || n !== 1 ? true :false;
  }


console.log(plural(0));//true
console.log(plural(0.5));//true
console.log(plural(1));//false
console.log(plural(100));//true
console.log(plural(Infinity));//true﻿function mango(quantity, price){

let freeMangoesQty = 0 ;
for (let index = 1; index <= quantity; index++) {

  ( index   % 3 == 0 ) ?  freeMangoesQty = freeMangoesQty+1 : 0;

}
//console.log(quantity);
//console.log(freeMangoesQty);
//xwconsole.log(quantity * price);
// cxwonsole.log((quantity / 3) * price );
// console.log(freeMangoesQty);
console.log((quantity - freeMangoesQty) * price);
// console.log( freeMangoesQty * price);
//return ((quantity - freeMangoesQty) * price);
}



//console.log(mango(3, 3));
//console.log(mango(9, 5));
console.log(mango(6, 20));
console.log(mango(66, 42));
console.log(mango(82, 49));const quarterOf = (month) => {
    // Your code here
    if (month >= 1 && month <= 3 ) {
        return 1;
    } else if (month >= 4 && month <= 6 ) {
        return 2;
    }else if (month >= 7 && month <= 9 ) {
        return 3;
    } else{
        return 4;
    }
  }


  console.log(quarterOf(3));

  console.log(quarterOf(8));

  console.log(quarterOf(11));﻿// function lowercaseCount(str){
//     //How many?
// //    console.log("/[a-z]/".test(str));
//     //result = /^a-z/.test(str);
//     // console.log(result);
//    // console.log(str.split(""));
//     // const re = str.search(/^a-z/);
//     // console.log(str.match(/[a-z]/));
//     // console.log(re);
//     str = str.split("");  
//     console.log(str);
//     let counter = 0;
//     str.forEach(element => { 
//             if (element == element.toLowerCase()  && element.match(/[a-z]/) ) {
//                counter += 1;
//             }
//     });
// console.log(counter);


// }


function lowercaseCount(str){

//console.log((str.match(/[a-z]/g) || []).length );

    str = str.split("");  
     let counter = 0;
    str.forEach(element => { element == element.toLowerCase()  && element.match(/[a-z]/)  ?    counter += 1 : counter += 0; 
 
    });
console.log(counter);
return counter;

}


lowercaseCount("abc")//, 3);
lowercaseCount("abcABC123");// 3);
lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~");// 3);
lowercaseCount("");// 0);
lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~")//, 0)
lowercaseCount("abcdefghijklmnopqrstuvwxyz")//, 26);﻿function distinct(arr) {

return arr.filter((item,index) => arr.indexOf(item)  == index);

  }

  console.log(distinct([1,2]));
  console.log(distinct([1,1,2]));
  console.log(distinct([1,2,3,4,5,5,5]));function removeChar(str){
    //You got this!
    str = str.slice(1).slice(0,-1);
    return str;
   };
   
   
  console.log(removeChar('eloquent'));
  console.log(removeChar('country'));
  console.log(removeChar('person'));// function array(string) {
//       console.log(string.split(",").length);     
//     //console.log(string.split(",").slice(1,-1).join(" "));      
//   string =  string.split(",");
//      if ( string.length < 3) {
//          return null;
//     } else {
  
//         string.shift();
//         string.pop();
//         return string.join("");
//     }
//   }


  
   function array(string) {
    //console.log(string.split(",").slice(1,-1).join(" "));      

   return  (string.split(",").length < 3) ? null : string.split(",").slice(1,-1).join(" "); 
//   string =  string.split(",");
//      if ( string.length < 3) {
//          return null;
//     } else {
  
//         string.shift();
//         string.pop();
//         return string.join("");
//     }
  }
 
   


console.log(array(' '));
console.log(array('1',));
console.log(array('A1,B2'));


console.log(array('1,2,3'));
console.log(array('1,2,3,4'));
console.log(array('A1,B2,C3,D4,E5'));
console.log(array('A,1,23,456,78,9,Z'));﻿function removeEveryOther(arr){
    //your code here

//  let x = arr.filter(function(element, index) 
//  { return index % 2 == 0;});


//  var filtered = arr.filter(function(element, index){
//     return  index % 2 == 0;
//   });

    // console.log(ans);
    // console.log(arr);

    // for (var i = 0; i <= arr.length; i++) {
    // if ( i % 2 == 0) {
    //       arr.splice(arr[i],1); 
    //        }
    // }
    // console.log(arr);
    // return filtered;
filtered = [];
    for (var i = 0; i < arr.length; i ++) {
      if ( i % 2 == 0) {
        
        console.log(arr[i]);
            filtered.push(arr[i]); 
             }
      }
      console.log(filtered);
      return filtered;
}


removeEveryOther(['Hello', 'Goodbye', 'Hello Again']); 
//['Hello', 'Hello Again']);
removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);//[1, 3, 5, 7, 9]);
// removeEveryOther([[1, 2]])// [[1, 2]]);
// removeEveryOther([['Goodbye'], {'Great': 'Job'}])//[['Goodbye']]);function whatday(num) { 

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
console.log(whatday(8));function seatsInTheater(nCols, nRows, col, row) {
    //coding and coding..
    
    let seatsInCurrentARowBlocking = (nCols - col)+1;
    //console.log(seatsInCurrentARowBlocking);
    let seatsInRowsBehindBlocking = (nRows - row);
    //console.log(seatsInRowsBehindBlocking);

    //return seatsInCurrentARowBlocking * seatsInRowsBehindBlocking;


/*    ------------------------------------------------------------------------------------------------------------------------------------*/


return ((nCols - col)+1)*(nRows - row);
  }



console.log(seatsInTheater(16,11,5,3));
console.log(seatsInTheater(1,1,1,1));
console.log(seatsInTheater(13,6,8,3));
console.log(seatsInTheater(60,100,60,1));
console.log(seatsInTheater(1000,1000,1000,1000));function whoseMove(lastPlayer, win) {
    //coding and coding..
    
    if (lastPlayer === "black" && win === true) {return  "black"}
    if (lastPlayer === "black" && win === false) {return  "white"}
    if (lastPlayer === "white" && win === true) {return "white"}
    if (lastPlayer === "white" && win === false) {return "black"}


  //  result = (lastPlayer === "white" && win  === true) ?  "white": "black";
//   console.log(result);
   
    // return result;

    /**
     * Alternative MEthod logic for Alternative player
     */
  }


console.log(whoseMove("black",false));//,"white")

console.log(whoseMove("white",true));//,"white")

console.log(whoseMove("white",false));//,"black")﻿function StringyString(name){
var size="";
console.log(name);

for (let index = 0; index < name.length; index++) {
        if (index % 2 == 0) {
            size +="1";
        } else {
            size +="0";
        }
    
}
return size;
console.log(size);
}

console.log(StringyString("name"));
console.log(StringyString("1"));
console.log(StringyString("namename"));
console.log(StringyString("name "));
console.log(StringyString( (Math.random() * 50 + 1) | 0));﻿function finalGrade (exam, projects) {

    // if (exam > 90 || projects >10) {
    //     return 100;
    // } else if (exam > 75 && projects > 5) {
    //     return 90;
    // }  else if (exam > 50 && projects > 2){
    //     return 75;
    // } else{
    //     return 0;
    // }
    if (exam > 90 || projects >10) {
        return 100;
    } else if (exam > 75 &&  projects > 4 && projects < 10) {
        return 90;
    }  else if (exam > 49 && projects > 2 && projects < 4){
        return 75;
    } else{
        return 0;
    }
  }
/*


*/
/*
Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.

This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);

This function should return a number (final grade). There are four types of final grades:

100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
0, in other cases

*/
 console.log(finalGrade(100, 12));//, 100);
// console.log(finalGrade(99, 0));//, 90);
// console.log(finalGrade(10, 15));//, 90);
 console.log(finalGrade(85, 5));//, 90);
// console.log(finalGrade(55, 3));//, 90);
// console.log(finalGrade(55, 0));//, 90);
// console.log(finalGrade(20, 2));//, 90);
//
// console.log(finalGrade(50, 2));//, 75);
// console.log(finalGrade(50, 9));//, 90);
// console.log(finalGrade(67, 9));//, 75);﻿function sumMul(n,m){
let multiples = [];
    for (let index = n; index < m; index++) {
      // const element = array[index];
      ( index % n  == 0) ? multiples.push(index):null ;
    }
// console.log(multiples);
// console.log(multiples.length);

return (multiples.length <= 0 ) ?  "INVALID" : multiples.reduce((result, currentValue) => result + currentValue);
if (multiples.length <= 0 ) {
  return "INVALID";
} else {
  return multiples.reduce((result, currentValue) => result + currentValue);
}
    // let index = 0;
    // let ans = [];
    // let result = 0;
    // do {
    //   ( index % n  == 0) ? ans.push(index) : null;        index++;
    //  //   ( index % n  == 0) ?  result+= result + index: null;        index++;
    //   //  index++;
    // }

    // while (index < m );
    // let sum = 0;
    // ans.forEach( num => {
    //     sum += num;
    //   })

    // console.log(sum);
    // //console.log(ans);
    // return (sum == 0 ) ?  "INVALID" : ans.reduce((result, currentValue) => result + currentValue);
}

console.log(sumMul(0,0));
console.log(sumMul(2,9));
 console.log(sumMul(4,-7));


console.log(sumMul(49, 6615));
// console.log(sumMul(4,-7));
// console.log(sumMul(4,-7));function problem(x){
  //your code here
 //console.log(typeof x);
   return typeof x == 'string' ? "Error" : x * 50 + 6;
}


console.log(problem(1));
console.log(problem(5));
console.log(problem(0));
console.log(problem(1.2));
console.log(problem("RyanIsCool"));function isOpposite(s1,s2){
    //coding here...
    if (s1.length === 0 && s2.length === 0 )  {return false}
    if (s1.length !== s2.length )  {return false}
    const ans = s1.split("").filter((v,i) => v === s2[i]) ;
    //console.log(ans);
    if (ans.length > 0)  {return false}
    if (ans.length === 0)  {return true}
    
}

/*
  console.log(isOpposite("ab","AB"));//true
    console.log(isOpposite("aB","Ab"));//true
  console.log(isOpposite("aBcd","AbCD"));//true
  console.log(isOpposite("aBcde","AbCD"));//false
  console.log(isOpposite("AB","Ab"));//false
  console.log(isOpposite("",""));//false
  */
  console.log(isOpposite("JAAavNAGbzVM","jaaAVnagBZvm"));//falsefunction tripleTrouble(one, two, three){
    //Solution
    let arr = [];
    //var str = " ";
   // let arr = " ";
    //console.log(one.split(""));
    // console.log(two.split(""));
    // console.log(three.split(""));

    one = one.split("");
    two = two.split("");
    three = three.split("");

  //  arr = arr.concat(one,two,three);
    console.log(one);
     console.log(two);
    console.log(three);
    for (let index = 0; index < one.length; index++) {
        // const element = array[index];
        // one[index] =+ two[index],three[index];
     //   console.log(one[index],two[index],three[index]);
        //arr += one[index],two[index],three[index];
        //arr += one[index],two[index],three[index];
       //arr.concat(one[index],two[index],three[index]);
//console.log(two[index]);
            arr.push(one[index],two[index],three[index]);

// arr += one[index],two[index],three[index];
        console.log(arr);
   }
   console.log(arr);
   //return arr;
   return arr. join("");
}


console.log(tripleTrouble("aaa","bbb","ccc"));﻿function sayHello( name, city, state ) {
    //console.log(name.toString().replaceAll(',' ,' '));
    return "Hello, "+ name.toString().replaceAll(',' ,' ').concat("!").trim()+ " Welcome to "+ city +", " +  state.concat("!") ;
    //return "Hello, "+ name.toString().replaceAll(',' ,' ').concat("!").trim()+ " Welcome to "+ city +", " +  state.concat("!") ;
}


console.log(sayHello(['John', 'Smith'], 'Phoenix', 'Arizona'));
console.log(sayHello(['Franklin','Delano','Roosevelt'], 'Chicago', 'Illinois'));
console.log(sayHello(['Wallace','Russel','Osbourne'],'Albany','New York'));function greet(language) {
	const DB = { "english" : "Welcome", "czech" :"Vitejte" , "danish": "Velkomst", "dutch": "Welkom", "estonian":"Tere tulemast", "finnish": "Tervetuloa","flemish": "Welgekomen", "french":"Bienvenue", "german": "Willkommen","irish":"Failte", "italian": "Benvenuto","latvian": "Gaidits", "lithuanian": "Laukiamas", "polish": "Witamy", "spanish":"Bienvenido","swedish":"Valkommen","welsh":"Croeso"};
   // console.log(language);
    //console.log(DB);
    const pairs = Object.entries(DB);
    // console.log(pairs);
    let chosenLang= "";
    pairs.forEach(element => {
       // console.log(element[0]);
        // chosenLang = element[0] == language ? element[1];
        if ( element[0] == language ) {
            chosenLang =  element[1];
        } 
        //  else{
        //     chosenLang = "Welcome";
        // }

    });
    //console.log(chosenLang.length);

    return chosenLang.length == 0 ? "Welcome" : chosenLang;
}


console.log(greet('english'));
console.log(greet('dutch'));
console.log(greet('IP_ADDRESS_INVALID'));﻿function enough(cap, on, wait) {
    // your code here
       return (cap  > (on + wait))  ?  0 : Math.abs((on + wait) - cap); 

}

console.log(enough(10, 5, 5));//0
console.log(enough(100, 60, 50));//10
console.log(enough(20, 5, 5));//0
function datingRange(age){
    //return min-max
 //console.log(age  / 2 + 7)
 //console.log((age  - 7) *2 )
 //console.log((age -7) * 2)
//    return `${Math.floor(age  -  0.10 * age)}-${Math.floor(age  + 0.10 * age)}`;


    return (age <= 14) ? `${age-0.10*age}-${age+0.10*age}` : `${Math.floor(age  / 2 + 7)}-${Math.floor((age  - 7) *2) }` ;
  }



console.log(datingRange(17));//, "15-20")
console.log(datingRange(40));//, "27-66")
console.log(datingRange(15));//, "14-16")
console.log(datingRange(35));//, "24-56")
console.log(datingRange(10));//, "9-11")String.prototype.toAlternatingCase = function () {
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


  console.log("hello world".toAlternatingCase());function Dog(breed) {
  this.breed = breed;
}

var snoopy = new Dog("Beagle");

snoopy.bark = function () {
  return "Woof";
};

var scoobydoo = new Dog("Great Dane");

scoobydoo.bark = function () {
  return "Woof";
};

console.log(snoopy.bark());
console.log(scoobydoo.bark());

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
console.log(describeAge(100));//, "You're a(n) elderly");function squaresOnly(array) {

//  console.log(array.filter((e,i) => Number.isInteger(Math.sqrt(e)) === true));
 return array.filter((e,i) => Number.isInteger(Math.sqrt(e)) === true); 
//  console.log(array.filter((e,i) =>console.log(e ** 2 === array[i])));

//console.log();

    // var result = [], isSquare;
    // for (let i = 0; i < array.length; i++) {
    //   isSquare = !1; // !1 evaluates to false and is therefore a shorthand way of typing 'false'
    //   for (let k = 0; k <= 10; k++) {
    //     if (k ** 2 === array[i]) {
    //       isSquare = true;
    //     }
    //   }
    //   if (isSquare) {
    //     result[result.length] = array[i];
    //   }
    // }
    // return result;
  }

  console.log(squaresOnly([0,1,2,3,4,5,6,7,8,9,10]));//, [0,1,4,9]);
  console.log(squaresOnly([31,33,35,37,39,38,36,34,32]));//, [36]);
  console.log(squaresOnly([0,10,20,30,40,50,60,70,80,90,100]));//, [0,100]);
  console.log(squaresOnly([20,19,18,17,16,15,13,11,9,1,5,4]));//, [16,9,1,4]);
  console.log(squaresOnly([45,36,75,64,9,9,4,1,4,1,1,16,16,18,17,35,25,35]));//, [36,64,9,9,4,1,4,1,1,16,16,25]);function sumSquares(array) {
    const  iV = 0;
  return  array.reduce((acc,cV)=>acc+cV**2,iV);
//  return  array.reduce((acc,cV)=>acc+cV*cV,0);
    // var result = 0;
    // for (let i = 0; i < array.length; i++) {
    //   result += array[i] ** 2;
    // }
    // return result;

}


  console.log(sumSquares([1,2,3,4,5]));//, 55);
  console.log(sumSquares([7,3,9,6,5]));//, 200);
  console.log(sumSquares([11,13,15,18,2]));//, 843);
  console.log(sumSquares([-5,-4,-3,-2,-1,0,1,2,3,4,5]));//, 110);function find(array, element) {
  //console.log(array.includes(element));
  return array.includes(element) ?array.indexOf(element):"Not Found";
  return a.includes(e) ?a.indexOf(e):"Not Found";
//return array.indexOf(element)!==-1?array.indexOf(element):"Not Found";

  }

  var array = [2,3,5,7,11];

  console.log(find(array, 5));//2
  console.log(find(array, 11));//4
  console.log(find(array, 3));//1
  console.log(find(array, 2));//0
  console.log(find(array, 7));//3
  console.log(find(array, 1));//Not Found
  console.log(find(array, 8)); //Not Found 

    //return array.filter((e,i) => e == element).length == 1 ? array.filter((e,i) => e == element ) : "Not Found";
/*
  for (let i = 0; i < array.length; i++) {
      if (array[i] === element) return i;
    }
    return "Not found";*/﻿function bmi(weight, height) {
    let bmi =   weight / Math. pow(height,2);

    if (bmi <= 18) {
        return "Underweight";
    }
    if (bmi <= 25) {
        return "Normal";
    }
    if (bmi <= 30) {
        return "Overweight";
    }
    if (bmi > 30) {
        return "Obese";
    }
//

  }

console.log(bmi(80, 1.80));var humanYearsCatYearsDogYears = function(humanYears) {
    // Your code here!

    let catYears = 0;
    let dogYears = 0;
    for (let index = 1; index <= humanYears; index++) {
        console.log(index);
        // const element = array[index];
        if (index === 1) {
            catYears =  15;
            dogYears =  15;
        } else if (index === 2) {
            catYears = catYears + 9;
            dogYears = dogYears + 9;
        } else {
            catYears = catYears + 4;
            dogYears = dogYears + 5;
        }
       // console.log(dogYears);
    }
    
    return [humanYears,catYears,dogYears];
  }
  

  console.log(humanYearsCatYearsDogYears(1))
  console.log(humanYearsCatYearsDogYears(2));
  console.log(humanYearsCatYearsDogYears(10))function numberToString(num) {
    console.log(typeof String(num));
    return String(num);  
}

console.log(numberToString(67));﻿function countSheeps(arrayOfSheep) {
    // TODO May the force be with you

 const size = arrayOfSheep.filter((sheep) => sheep == true);

 return size.length;

}


  console.log(countSheeps( [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true ]));function validateHello(greetings) {
   return /hello|ciao|salut|hallo|hola|ahoj|czesc/ig.test(greetings);
  }

//const validateHello = greetings => /hello|ciao|salut|hallo|hola|ahoj|czesc/ig.test(greetings);

 console.log(validateHello('ahoj'));//, true)
 console.log(validateHello('meh'));//, false)function doubleChar(str) {
    // Your code here
    str = str.split("");
    for (let index = 0; index < str.length; index++) {
        str[index] = str[index].repeat(2);
    }
    return str.join("");
    console.log();

  }
  /*
  
  could use map 
  * */

      console.log(doubleChar("abcd"));//, "aabbccdd");
    console.log(doubleChar("Adidas"));//, "AAddiiddaass");
    console.log(doubleChar("1337"));//, "11333377");
    console.log(doubleChar("illuminati"));//, "iilllluummiinnaattii");
    console.log(doubleChar("123456"));//, "112233445566");
    console.log(doubleChar("%^&*("));//, "%%^^&&**((");function evenNumbers(array, number) {
    // good luck

    return array.filter((value) => value % 2 == 0).slice(-number);
    var result = array.filter((value) => value % 2 == 0);
    console.log(result);
console.log(result.slice(-number))
  //return result.slice(result.length -1);
;  }

console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
console.log(evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2));
console.log(evenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1));function findMultiples(integer, limit) {
    //your code here
    let ans = [];
    // for (let index = 1; index <= limit ; index++) {
    //     ( index % integer  == 0) ? ans.push(index) : null;
    // }
    let index = 0;
    do {
        ( index % integer  == 0) ? ans.push(index) : null;        index++;
    }
    while (index <= limit );
    return ans;
  }
 console.log(findMultiples(5, 25));
 console.log(findMultiples(1, 2));
 console.log(findMultiples(5, 7));
 console.log(findMultiples(4, 27));/*function rainAmount(mm){
    if (rainAmount = 40) {
         return "You need to give your plant " + {rainAmount - 40} + " mm of water"
    };
    if else {
         return "Your plant has had more than enough water for today!"
    };
}*/

function rainAmount(mm){

   return  (mm < 40) ? `You need to give your plant ${40 - mm}mm of water`:`Your plant has had more than enough water for today!`;
}

console.log(rainAmount(100));
console.log(rainAmount(39));


function getASCII(c){
   return c.charCodeAt();
  }function getNumberFromString(s) {
    //return 0;
    //console.log();
    let output =  s.match(/(\d+)/g)[0];

    //return Number(output);
return Number(s.match(/(\d+)/g)[0]);
//console.log(typeof output);
//return output;
  //  console.log(output);
  }


  console.log(getNumberFromString("1"));
  console.log(getNumberFromString("123"));
  console.log(getNumberFromString("this number is :7"));var summation = function (num) {
    // Code here
    let sum = 0;
    //for (let index = 1; index <= num; index++) {
        //console.log(index);
    //sum +=  index;      
    //console.log(sum);
    //}
    i=0;
    do {
        i++;
        sum += i;
      } while (i < num );
    return sum;
}
  console.log(summation(2));
  console.log(summation(8));function weatherInfo (temp) {
    var c = convertToCelsius(temp);
    if (c > 0)
    return (c + " is above freezing temperature")
    else

      return (c + " is freezing temperature")
  }
  
  function convertToCelsius (temperature) {
    var celsius = (temperature - 32) * (5/9)
    return celsius;
  }



  console.log(weatherInfo(50));


  /**
    function weatherInfo (temp) {
  var c : convert(temp)
  if (c > 0)
    return (c + " is freezing temperature")
  else
    return (c + " is above freezing temperature")
}

function convertToCelsius (temperature) {
  var celsius = (tempertur) - 32 + (5/9)
  return temperature
}
    
   
   */function getGrade (s1, s2, s3) {
    // Code here
      let avg = (s1+s2+s3) / 3;
  if (avg >= 90 && avg < 100) {
      return "A";
  } else if (avg >= 80 && avg < 90) {
      return "B";
  } else if (avg >= 70 && avg < 80) {
      return "C";
  } else if (avg >= 60 && avg < 70 ) {
      return "D";
  } else{
       return "F";
  }
    
  }

console.log(getGrade(95, 90, 93));
console.log(getGrade(100, 85, 96));
console.log(getGrade(92, 93, 94));
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
  console.log(boris.name("Bobo"));function dutyFree(normPrice, discount, hol){

   return Math.floor((hol/((normPrice/100)*discount)));
}

console.log(dutyFree(12, 50, 1000));//, 166);
console.log(dutyFree(17, 10, 500));//, 294);
console.log(dutyFree(24, 35, 3000));//, 357);   function betterThanAverage(classPoints, yourPoints) {
 //Attempt 1
    // //Get sum
    // let sum  = classPoints.reduce((accumulator, currentValue) => accumulator + currentValue,);
    // //Get AVg
    // let avg = sum / classPoints.length;
    // console.log(avg);
    // //get result
    // return  ( yourPoints > avg) ?  true : false;

    //Attempt 2
        //Get sum + avg
     return  yourPoints > (classPoints.reduce((accumulator, currentValue) => accumulator + currentValue,) / classPoints.length) ? true : false;
     console.log(sum);
    // //Get AVg
    // let avg = sum / classPoints.length;
    // console.log(avg);
    // //get result
    // return  ( yourPoints > avg) ?  true : false;
}
  




console.log(betterThanAverage([2, 3], 5));function  calculateAge(birthYear1,birthYear2) {

    let answer = "";
    if (birthYear2 > birthYear1) {

        let years = birthYear2 - birthYear1;
        answer = (years > 1 ) ? `You are ${years} years old.` : `You are ${years} year old.`;
    }
    if (birthYear2 < birthYear1) {
        let years = birthYear1 - birthYear2
        answer = (years > 1 ) ? `You will be born in ${years} years.` : `You will be born in ${years} year.`;
    }
    if (birthYear2 === birthYear1) {

       
        answer = `You were born this very year!`;
    }

    return answer;   }
    
console.log(calculateAge(2012, 2016));//,"You are 4 years old.");
console.log(calculateAge(1989, 2016));//,"You are 27 years old.");
console.log(calculateAge(2000, 2090));//,"You are 90 years old.");
console.log(calculateAge(2000, 1990));//,"You will be born in 10 years.");
console.log(calculateAge(3400, 3400));//,"You were born this very year!"); 
console.log(calculateAge(900, 2900));//,"You are 2000 years old.");
console.log(calculateAge(2010, 1990));//,"You will be born in 20 years.");
console.log(calculateAge(2010, 1500));//,"You will be born in 510 years.");
console.log(calculateAge(2011, 2012));//,"You are 1 year old.");
console.log(calculateAge(2000, 1999));//,"You will be born in 1 year.");function isDigit(s) {
    //your code
return Number(s) ? true : false;
    console.log(Number(s));
  }

  console.log(isDigit(input = "s2324"));
  console.log(isDigit(input = "-234.4"));
  console.log(isDigit(input = " 3 "));
  console.log(isDigit(input = "  3  "));
  console.log(isDigit(input = "-3.23"));
  console.log(isDigit(input = "3-4"));
  console.log(isDigit(input = "  3   5"));
  console.log(isDigit(input = " 3 5"));
  console.log(isDigit(input = "zero"));function isPalindrome(x) {
    // your code here
  /*  console.log(x.split(""));
    console.log(x.split("").reverse());
    console.log(x.split("").reverse().join(""));
*/
    return x === x.split("").reverse().join("") || x.toLowerCase() === x.split("").reverse().join("").toLowerCase();
  }


console.log(isPalindrome("a"));//, true));
console.log(isPalindrome("aba"));//, true));
console.log(isPalindrome("Abba"));//, true));
console.log(isPalindrome("hello"));//, false));
console.log(isPalindrome("Bob"));//, true));
console.log(isPalindrome("Madam"));//, true));
console.log(isPalindrome("AbBa"));//, true));
console.log(isPalindrome(""));//, true));function testEven(n) {
    //Your awesome code here!
    return n % 2 == 0 ? true : false;
}

console.log(testEven(0));//, true, "testEven for 0");
console.log(testEven(0.5));//, false, "testEven for 0.5");
console.log(testEven(1));//, false, "testEven for 1");
console.log(testEven(2));//, true, "testEven for 2");
console.log(testEven(-4));//, true, "testEven for 2");var isDivisible = (n, x, y) => {
    return (n % x == 0 && n % y == 0) ? true : false ;
}

console.log(isDivisible(3,3,4));
console.log(isDivisible(12,3,4));
console.log(isDivisible(8,3,4));
console.log(isDivisible(48,3,4));String.prototype.isUpperCase = function() {
    // your code here
    console.log();
    return String(this) == this.toUpperCase();
  }



  console.log('c'.isUpperCase());function periodIsLate(last, today, cycleLength) {

    // var someDate = new Date();
    // var numberOfDaysToAdd = 6;
    // var result = someDate.setDate(someDate.getDate() + numberOfDaysToAdd);
    // console.log(new Date(result))

    //  let newDate = new Date();
    //  var result =  newDate.setDate(last.getDate() + cycleLength)
    // console.log(new Date(last.getDate + cycleLength));
    // console.log(new Date(today));

    
    
//cycleLength * 24*60*60*1000;
    //let dateinTime = last.getTime() ;
   // console.log(today.getTime() - last.getTime());
    //console.log(last.getTime() - today.getTime());
    
    
    //console.log(cycleLength * 24*60*60*1000);
    //console.log();


    return (today.getTime() - last.getTime()) > cycleLength * 24*60*60*1000 ? true : false  ;
   // console.log(cycleLength * 7 *  24 * 60);

    console.log(today.getTime());
  //  return false;

    
  }
  //milliseconds
//(hours) * (minutes) * (seconds) * (milliseconds)
  console.log(periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 35));
  console.log(periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 28));function getMax1()
{
  var max = 
  {
   name: 'Max Headroom'
  }
  return max;
}

function getMax2()
{
     var max = 
  {
    name: 'Max Headroom'
  }
  return max;
}
console.log(Object.values(getMax2()).toString() === Object.values(getMax1()).toString());
console.log(JSON.stringify(getMax2()));

console.log(stringify(getMax2()) === stringify(getMax1()));function mergeArrays(a, b) {
    // your code here
 
    a = a.concat(b);
    let result = a.filter(function(item,pos){
       return a.indexOf(item) == pos;
     }).sort(function(a,b){ return a  -b});
   return result;
      
      //a.concat(b)

    console.log(result);
    return Array(result);

    //return new Set([...a,...b].sort());

    //attempt 1
    a = a.concat(b);
    return a = a.filter(function(item,pos){
        return a.indexOf(item) == pos;
      }).sort();
}


console.log(mergeArrays([1, 3, 5], [2, 4, 6]));
console.log(mergeArrays([2,4,8], [2, 4, 6]));﻿function nameOnBillboardPrice(name){
    let total  = 0;
    for (let i = 0; i < name.length; i++) {
         total += 30;
    }
    return total
}

console.log(nameOnBillboardPrice("Jeong-Ho Aristotelis"));﻿function nameOnBillboardPrice(name){
    return name.length / (1 / 30);
}

console.log(nameOnBillboardPrice("Jeong-Ho Aristotelis"));function nameShuffler(str){
    //Shuffle It

    return  str.split(" ").reverse().join(" ");
  }


console.log(nameShuffler('john McClane'));
console.log(nameShuffler('Mary jeggins'));
console.log(nameShuffler('tom jerry'));function pillars(numPill, dist, width) {
    // your code here
   // console.log(((numPill -2) * dist ) * width );
    //numPill

   // console.log( dist  (width /100));
   console.log((numPill-2)*width); 
   console.log((numPill-2)*width);
  // console.log(numPill > 1? (numPill-1)*dist*100+(numPill-2)*width:0);
    // if (numPill <=  1) {
      
    //     return 0;
    // } else if (numPill <=  2) {
  

    //     numPill--;
    //     console.log((numPill * dist) / 0.01);
    // } else {

    //     let excludeFirstAndLastPillars = (width * 2) ;
    //     console.log(excludeFirstAndLastPillars);
    // // console.log((((numPill -2 ) * dist) / 0.01) );
    // console.log((numPill ) * (dist / 0.01) )
    // }
  }

console.log(pillars(1, 10, 10));
console.log(pillars(2, 20, 25));//2000
console.log(pillars(11, 15, 30));//15270
//console.log((16500 - 15270) );function printArray(array){
    //show me the code!
    //console.log(array);
    //console.log( array.join(","));

    // let str ="";
    // console.log(str);
    // array.forEach(element => {
    //     console.log(str += element);
    // });
    return array.join(",");
}

  console.log(printArray([2,4,5,2]));function greet(name){
    //your code here
    return `Hello, ${name} how are you doing today?`;
  }


  console.log(greet("Ryan"));//, "Hello, Ryan how are you doing today?");
  console.log(greet("Shingles"));//, "Hello, Shingles how are you doing today?");function makeNegative(num) {
    // Code?

    return Math.sign(num) == -1 ? num : -num;

    
  } 

  //(condition1) ? true : (condition2) ? true : false ;
  console.log(makeNegative(42));
    var mystery=()=>{
     var results = {sanity: 'Hello'};
    return  results;

      //    return {sanity: 'Hello'};
 }


  console.log(mystery());function twoHighest(arr) {
   // arr.sort(function(a,b){return a<b ? 1 : -1})
    return [...new Set(arr)].sort(function(a,b){return a<b ? 1 : -1}).splice(0,2);
    
    console.log(arr);

}


console.log(twoHighest([]));//, [])
console.log(twoHighest([15]));//, [15])
console.log(twoHighest([15, 20, 20, 17]));//, [20, 17])const reverseSeq = n => {


// let arr = [];
// do {
//     arr.push(n);
//     n--;
// } while (n >= 1);
//     return arr;
console.log(Array(9) /* Array() = length of Array*/);
// map(//value , //index)
return Array(n).fill(0).map((e,i)=> n--);


  };


  console.log(reverseSeq(5));//[5, 4, 3, 2, 1]
var greet_abe = function() {
    var name = 'Abe';
  return "Hello, " + name + '!';
};

var greet_ben = function() {
    var name_ = 'Ben';
  return "Hello, " + name_ + '!';
};


console.log(greet_abe());
console.log(greet_ben());
﻿function solution(a, b){
    // attempt 1å
//    return a.length < b.length ?    `${a}${b}${a}` : `${b}${a}${b}`;
 // attempt 2
    let result ="";
return result =  a.length < b.length ?    result.concat(a,b,a,"") : result.concat(b,a,b,"");  
  }

console.log(solution('45', '1'));function validateUsr(username) {
    
    return /^[a-z0-9_]{4,16}$/.test(username);
  }

 console.log(validateUsr('asddsa'));//, true);
 console.log(validateUsr('a'));//, false);
 console.log(validateUsr('Hass'));//, false);
 console.log(validateUsr('Hasd_12assssssasasasasasaasasasasas'));//, false);
 console.log(validateUsr(''));//, false);
 console.log(validateUsr('____'));// true);
 console.log(validateUsr('012'));//, false);
 console.log(validateUsr('p1pp1'));//, true);
 console.log(validateUsr('asd43 34'));//, false);
 console.log(validateUsr('asd43_34'));//, true);function twoSort(s) {


    return s.sort(function(a,b){return    a > b ? 1 : -1;}).shift().split("").join("***");
   //const result = s.sort(function(a,b){return    a > b ? 1 : -1;}).shift().split("").join("***");
   //console.log(result);
  // let firstEl = result.shift();



  //  firstEl = firstEl.split("").join("***");
   // return firstEl;
 //   console.log(firstEl);

}


console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]));//, 'b***i***t***c***o***i***n' );
console.log(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]));//, 'a***r***e'); function squareSum(numbers){
    let squareSumofN = 0;
    
    //   return  numbers.length == 0 ? 0 :    numbers.reduce((accumulator, currentValue) =>  accumulator + (currentValue * currentValue));
    // console.log(sumWithInitial);

    for (const key in numbers) {
        squareSumofN += numbers[key] * numbers[key]; 
    }
    return  squareSumofN;
    console.log(initialValue);
}


console.log(squareSum([1,2]));
console.log(squareSum([-2,0]));
console.log(squareSum([14,-8,-5,-10,2,12,-12,-19,6,19]));
console.log(squareSum([]));
console.log(squareSum([]));function buildString(...template){
    return `I like ${template.join(', ')}!`;
  }



  console.log(buildString('Cheese','Milk','Chocolate'));function positiveSum(input) {


    const result = input.filter((value) => value > 0);
//console.log(result);
return  result.length == 0 ? 0 :result.reduce((accumlator,currentValue) =>accumlator+currentValue);

//console.log( input );

// if (input.length == 0) {
//     return 0;
// } else {
// for (const key in input) {
//     if (input[key] < 1) {
//         var index = input.indexOf(input[key);
//        input.splice(index, 1);
// console.log(input[key]);
//     }}


    // input.forEach(element => {
       
    //     if (element < 1) {
          
    //       var index = input.indexOf(element);
    //     input.splice(index, 1);
    //     }
    // });
    // console.log(input);
    // return input.reduce((accumlator,currentValue) =>accumlator+currentValue);
}



console.log(positiveSum([1,2,3,4,5]));
console.log(positiveSum([1,-2,3,4,5]));
console.log(positiveSum([]));
console.log(positiveSum([-1,-2,-3,-4,-5]));
console.log(positiveSum([-1,2,3,4,-5]));function sumOfDifferences(arr) {
arr.sort((a, b) => (a > b ? -1 : 1))

    let firsttwo = arr.slice(0, 2);
    let lasttwo = arr.slice(-2);
    console.log(firsttwo);
    console.log(lasttwo);

    // firsttwo = firsttwo.reduce((accumulator, currentValue) => {
    //     return accumulator + currentValue
    //   },0);
    //   lasttwo = lasttwo.reduce((accumulator, currentValue) => {
    //     return accumulator + currentValue
    //   },0);
    //   console.log(firsttwo);
    //   console.log(lasttwo);
// console.log((firsttwo.shift() - firsttwo.slice(-1)) + (lasttwo.shift() - lasttwo.slice(-1)));
return (firsttwo.shift() - firsttwo.slice(-1)) + (lasttwo.shift() - lasttwo.slice(-1)); 
}

console.log(sumOfDifferences([1, 2, 10]));function evalObject(value){
   // console.log(value.operation);
    var result = 0;
    switch (value.operation) {
        case '+':
             result = value.a + value.b;
           
            break;
        case '-':
            result = value.a - value.b;
            break;
        case '/':
            result = value.a / value.b;
            break;
        case '*': 
            result = value.a * value.b;
        break;
        case '%':
            result = value.a % value.b;
            break;
        case '^':
            result = Math.pow(value.a, value.b);
            break;
    }
    return result;
  }


  console.log(evalObject({a:1,b:1,operation:'+'}));
  console.log(evalObject({a:1,b:1,operation:'-'}));
  console.log(evalObject({a:1,b:1,operation:'/'}));
  console.log(evalObject({a:1,b:1,operation:'*'}));
  console.log(evalObject({a:1,b:1,operation:'%'}));
  console.log(evalObject({a:1,b:1,operation:'^'}));
function feast(beast, dish) {
    //your function here

    return ( (beast[0] === dish[0])  && (beast.slice(-1) === dish.slice(-1))) ? true: false;
    console.log(beast[0]);
    console.log(beast.slice(-1));
    console.log(dish[0]);
    console.log(dish.slice(-1));
    }
console.log(feast("great blue heron", "garlic naan"));//, true)
console.log(feast("chickadee", "chocolate cake"));//,, true)
console.log(feast("brown bear", "bear claw"));//,, false)function squareOrSquareRoot(array) {
    //return array;  

//    console.log(array.map((x) => console.log(x)));
//console.log(Math.sqrt(9 % 2));
//return array.map((x) =>   x % 2 === 0 ?  Math.sqrt(x) : x * x);
/*for (let index = 0; index < array.length; index++) {
const element = array[index];
let num = Math.sqrt(array[index]);
console.log( Math.sqrt(array[index])+  " "+Math.floor(array[index]));
console.log( Number.isInteger(Math.sqrt(array[index])) );


}*/

return array.map((x) =>   Number.isInteger(Math.sqrt(x))  ? Math.sqrt(x)  : x * x) ;

//If originally the squar root of given umber is not whole then it doesnt have a sq root 
  }


  console.log(squareOrSquareRoot(input= [ 4, 3, 9, 7, 2, 1 ]));
  var expected = [ 2, 9, 3, 49, 4, 1 ];
  console.log(squareOrSquareRoot(input= [ 100, 101, 5, 5, 1, 1 ]));
  var  expected = [ 10, 10201, 25, 25, 1, 1 ];
  console.log(squareOrSquareRoot(input= [  1, 2, 3, 4, 5, 6 ]));
  var  expected = [ 1, 4, 9, 2, 25, 36 ];function points(games) {
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
﻿/*function shortcut (string) {
    let pieces = string.split(" ");
     //let newstring = "";
     let newstring = [];
    //console.log(pieces);
    //return '';
    for (let index = 0; index < pieces.length; index++) {
       // console.log(index);
       console.log(pieces[index]);
       console.log(pieces[index].replaceAll(/[a|e|i|o|u]/gi,""));
       
       pieces[index] = pieces[index].replaceAll(/[a|e|i|o|u]/gi,"");
        /*for (let str_index = 0; str_index < pieces[index].length; str_index++) {
           // console.log(pieces[index][str_index]);
            //console.log(  pieces[index][str_index].match(/[a|e|i|o|u]/i));
         //   console.log(str_index);
            if (!pieces[index][str_index].match(/[a|e|i|o|u]/i)) {
                console.log(pieces[index][str_index]);
                pieces[index][str_index] = pieces[index][str_index]
                //pieces.splice(pieces[index][str_index], 1);
                //pieces[index] = pieces[index][str_index];
                // if (str_index == pieces[index].length ) {
                //     console.log("space");
                // } else {
                //     console.log("spacenon");
                // }
                 //str_index === pieces[index].length ?  newstring +=  pieces[index][str_index]+" " :  newstring +=  pieces[index][str_index];
                //newstring += pieces[index][str_index];
                //newstring.push(pieces[index][str_index]);
            }

        }
       // const element = array[index];
        
    }
    console.log(pieces);
    console.log(newstring);
  }


  console.log(shortcut('how are you today?'));
*/
//   function shortcut (string){

//     // const regex = /[aeiou]/gi;
//     // string.match(/[aeiou]/gi).length;
//     // console.log(string);
//     let pieces = string.split(" ");

//     for (const key in pieces) {
//         console.log(pieces[key]);
//         if (Object.hasOwnProperty.call(object, key)) {
//             const element = object[key];
            
//         }
//     }
//   }
 // console.log(shortcut('how are you today?'));


 function shortcut (string) {
//     let pieces = string.split(" ");
//     for (let index = 0; index < pieces.length; index++) {
//      pieces[index] = pieces[index].replaceAll(/[a|e|i|o|u]/gi,"");
//      }

//   return pieces.join(" ");
// return string = string.replaceAll(/[a|e|i|o|u]/gi,"");
return string.replaceAll(/[a|e|i|o|u]/gi,""); 
}
 
   console.log(shortcut('how are you today?'));
// function pipeFix(numbers) {

//   const first = numbers.splice(0, 1).shift();
//   const last = numbers.pop();
//   for (let index = 1; index <= last; index++) {
//     if (!numbers.includes(index)) {
//       numbers.push(index);
//     }
//   }
//    numbers.sort(function (a, b) {
//     return a - b;
//   });
//   return numbers;
// }

// console.log(pipeFix([1, 2, 3, 5, 6, 8, 9]));
// console.log(pipeFix([1, 2, 3, 12]));


function between(a, b) {

  numbers = [];
  for (let index = a; index <= b; index++) {
    numbers.push(index);
     }
     return numbers;
}


console.log(between(1, 4));﻿function cookie(str){
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