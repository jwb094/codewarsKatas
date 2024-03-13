function periodIsLate(last, today, cycleLength) {

    // var someDate = new Date();
    // var numberOfDaysToAdd = 6;
    // var result = someDate.setDate(someDate.getDate() + numberOfDaysToAdd);
    // console.log(new Date(result))

    //  let newDate = new Date();
    //  var result =  newDate.setDate(last.getDate() + cycleLength)
    // console.log(new Date(last.getDate + cycleLength));
    // console.log(new Date(today));

    
    
//cycleLength * 24*60*60*1000;
    //let dateinTime = last.getTime() ;
   // console.log(today.getTime() - last.getTime());
    //console.log(last.getTime() - today.getTime());
    
    
    //console.log(cycleLength * 24*60*60*1000);
    //console.log();


    return (today.getTime() - last.getTime()) > cycleLength * 24*60*60*1000 ? true : false  ;
   // console.log(cycleLength * 7 *  24 * 60);

    console.log(today.getTime());
  //  return false;

    
  }
  //milliseconds
//(hours) * (minutes) * (seconds) * (milliseconds)
  console.log(periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 35));
  console.log(periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 28));