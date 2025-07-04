String.prototype.digit = function() {
/*
    let notNumberPattern = /[^0-9]/g;
    let result = this.match(notNumberPattern);
    console.log(result);

    let numberPattern = /[0-9]/g;
    let numberPatternResult = this.match(numberPattern);
    console.log(numberPatternResult);
*/
    if (this.match(/[^0-9]/g) ) {
        return false;
    } 
    if(this.match(/[0-9]/g)){
        return   this.match(/[0-9]/g).length === 1 ? true : false;
    }


};


console.log(''.digit());//false
console.log('7'.digit());//true
console.log(' '.digit());//false
console.log('a'.digit());//false
console.log('a5'.digit());//false
console.log('14'.digit());//false