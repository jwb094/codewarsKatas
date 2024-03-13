function giveMeFive(obj){
    //coding here
    let output=[];
    for (var key in obj){
        key.length === 5 ? output.push(key) : null;
        obj[key].length === 5 ? output.push(obj[key]) : null
      }
  
 return output;
  }

  console.log(giveMeFive({Our:"earth",is:"a",beautyful:"world"}));//,["earth","world"]);
  console.log(giveMeFive({Ihave:"enough", money:"to",buy:"a",car:"model"}));//,["Ihave","money","model"]);
  console.log(giveMeFive({Pears:"than",apple:"sweet"}));//,["Pears","apple","sweet"]);