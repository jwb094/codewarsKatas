function toDayOfYear(arr) {

    let dayOfYear= 0;
    let isALeapYear = false;

    let leapYear =[
        31,//Jan
        29,//Feb
        31,//MAr
        30,//Apr
        31,//May
        30,//Jun
        31,//Jul
        31,//Aug
        30,//Sep
        31,//Oct
        30,//Nov
        31,//Dec
    ];
    let nonLeapYear =[
        31,//Jan
        28,//Feb
        31,//MAr
        30,//Apr
        31,//May
        30,//Jun
        31,//Jul
        31,//Aug
        30,//Sep
        31,//Oct
        30,//Nov
        31,//Dec
    ];





    (arr[2] % 4 === 0 && (arr[2] % 100 !== 0 ||arr[2] % 400 == 0 )) ? isALeapYear = true : isALeapYear = false;

    let correctDaysInMonthArray = (isALeapYear === true) ? leapYear : nonLeapYear; 

    for (let index = 0; index < arr[1]-1; index++) {
    
        dayOfYear += correctDaysInMonthArray[index];
    }

    return dayOfYear + arr[0];
  }




console.log(toDayOfYear([25, 12, 2017]));//, 359,);
console.log(toDayOfYear([31, 10, 1991]));//, 304);
console.log(toDayOfYear([1, 5, 3000]));//, 121);
console.log(toDayOfYear([14, 3, 1066]));//, 73);
console.log(toDayOfYear([5, 11, 1604]));//, 310);

console.log(toDayOfYear([31, 12, 2000]));//, 366);
console.log(toDayOfYear([31, 12, 2001]));//, 365);
console.log(toDayOfYear([31, 12, 2004]));//, 366);
console.log(toDayOfYear([31, 12, 2100]));//, 365);