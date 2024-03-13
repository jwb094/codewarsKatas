function solution(a, b){
    // attempt 1å
//    return a.length < b.length ?    `${a}${b}${a}` : `${b}${a}${b}`;
 // attempt 2
    let result ="";
return result =  a.length < b.length ?    result.concat(a,b,a,"") : result.concat(b,a,b,"");  
  }

console.log(solution('45', '1'));