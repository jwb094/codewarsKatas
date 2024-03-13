function getPercentage(sent, limit){
    // write code here

    if (sent === 0) {
        return `No e-mails sent`
    } else if (sent >= limit) {
        return "Daily limit is reached";
    } else if ( limit === undefined ) {
            limit = 1000;
    }
  return  `${Math.floor((sent/limit)*100)}%`;
  }


console.log(getPercentage(101, 1000));//, "10%")
console.log(getPercentage(256, 500));//, "51%")
console.log(getPercentage(256, 300));//, "85%")
console.log(getPercentage(259));//, "25%")
console.log(getPercentage(0));//, "No e-mails sent")
console.log(getPercentage(1000, 1000));//, "Daily limit is reached")