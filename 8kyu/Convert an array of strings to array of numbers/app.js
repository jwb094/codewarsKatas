function toNumberArray(stringarray){
    return stringarray.map((x) => Number(x));
}

console.log(toNumberArray(["1.1","2.2","3.3"]));