function StringyString(name){
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
console.log(StringyString( (Math.random() * 50 + 1) | 0));