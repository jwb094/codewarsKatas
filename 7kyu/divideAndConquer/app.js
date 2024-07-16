function divCon(x) {
    let output = new Array();
    //Seperate Strings and non strings
    const isString = x.filter((ele) => typeof ele === "string");
    const isInteger = x.filter((ele) => Number.isInteger(ele));

    //Calculate Strings and non strings
   
    const nonStringIntegers = isInteger.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    nonStringIntegersinitialValue = 0
    );

    const stringIntegers = isString.reduce(
    (accumulator, currentValue) => Number(accumulator) + Number(currentValue),
    stringIntegersInitialValue = 0
    );
    //subtract non-Strings and strings Value
    return nonStringIntegers - stringIntegers;
}

console.log(divCon([9, 3, "7", "3"]));
