function validateNumber(str){
    //Your code here
    
    str = str.replaceAll('-','').replaceAll('+44','').split("");
   return str.replaceAll(/\[+]447|07|-/g,"").split("").length >= 9  ? "In with a chance" : "Plenty more fish in the sea";
    }

console.log(validateNumber('07454876120'));//, 'In with a chance')
console.log(validateNumber('0754876120'));//, 'Plenty more fish in the sea', 'Number too short')
console.log(validateNumber('0745-487-61-20'));//, 'In with a chance')
console.log(validateNumber('+447535514555'));//, 'In with a chance')