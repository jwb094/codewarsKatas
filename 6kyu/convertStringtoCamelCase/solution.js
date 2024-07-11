
function toCamelCase(str){
    if (str === '') {
        return '';
    }
    str = str.split(/[.\-_\s]/);
    for (let i = 0; i < str.length; i++) {
         if (i === 0) {
            if (str[i][0] !== str[i][0].toUpperCase()) {
                str[i] = str[i].toLowerCase();
            }
         } else{

             str[i] = str[i][0].toUpperCase() + str[i].substr(1);
         }
    }
    return str.join("");

}


console.info(toCamelCase(''));
console.info(toCamelCase("A-B-C"));//ABC
console.info(toCamelCase("the_stealth_warrior"));//theStealthWarrior
console.info(toCamelCase("The-Stealth-Warrior"));//TheStealthWarrior
//"theStealthWarrior"