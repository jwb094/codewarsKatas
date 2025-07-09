const isReallyNaN = (val) => {
  // return isNaN(val);  // wasn't working as planned :-(
    //return Number.isNaN(val);
    return Number.isNaN(val) ? true : false;
};


console.log(isReallyNaN(37));
console.log(isReallyNaN('37'));
console.log(isReallyNaN(NaN));
console.log(isReallyNaN(undefined));