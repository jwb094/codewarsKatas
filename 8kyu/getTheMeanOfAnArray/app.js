

function getAverage(marks){
   return Math.floor(marks.reduce((previousValue,currentValue)=> previousValue + currentValue ,0) / marks.length);
}