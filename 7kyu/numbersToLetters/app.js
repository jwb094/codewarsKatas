function switcher(x){
    let output =[];


   // console.log(x.map((x_) => String.fromCharCode(123-Number(x))));

    for (let index = 0; index < x.length; index++) {
        if (x[index] === 27) {
            output.push('!');
        }
        if (x[index] === 28) {
            output.push('?');
        }
        if (x[index] === 29) {
            output.push(' ');
        }
     output.push(String.fromCharCode(123-Number(x[index])));
    }
   // console.log(output);



   // console.log(output.join("").replace("^"," "));
return output.join("").replace("^"," ");
}


console.log(switcher(['24', '12', '23', '22', '4', '26', '9', '8']));
console.log(switcher(['25','7','8','4','14','23','8','25','23','29','16','16','4']));
console.log(switcher(['4', '24']));