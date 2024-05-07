    // An array of keys
    var keys = [1, 2, 3,4,5];
     
    // An array of values
    var values = ['a', 'e', "i", "o", "u"];
     
    // Object created
    var obj = {};
     
    // Using loop to insert key
    // value in Object
    for(var i = 0; i < keys.length; i++){
        obj[keys[i]] = values[i];
    }
    //console.log(values);
function encode(string) {
    

    
let letters =string.split('');

for (let index = 0; index <= letters.length; index++) {
    const element = letters[index];
            for (var key of Object.keys(obj)) {
                if (obj[key] === element) {
                    letters[index] = key.toString();
                }
            }
    } 

    return letters.toString().replace(/,/g, '');
  }
  
function decode(string) {

    let letters =string.split('');
    for (let index = 0; index < letters.length; index++) {
        for (var key of Object.keys(obj)) {
            if (letters[index] === key) {
                letters[index] = obj[key].toString();
            }
       
        }
    }
    return letters.toString().replace(/,/g, '');
  }



  console.log(encode('hello'));//, 'h2ll4');
  console.log(encode('How are you today?'));//, 'H4w 1r2 y45 t4d1y?');
  console.log(encode('This is an encoding test.'));//, 'Th3s 3s 1n 2nc4d3ng t2st.');
  console.log(decode('h2ll4'));//, 'hello');