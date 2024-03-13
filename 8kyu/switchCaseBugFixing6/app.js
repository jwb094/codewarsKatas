function evalObject(value){
   // console.log(value.operation);
    var result = 0;
    switch (value.operation) {
        case '+':
             result = value.a + value.b;
           
            break;
        case '-':
            result = value.a - value.b;
            break;
        case '/':
            result = value.a / value.b;
            break;
        case '*': 
            result = value.a * value.b;
        break;
        case '%':
            result = value.a % value.b;
            break;
        case '^':
            result = Math.pow(value.a, value.b);
            break;
    }
    return result;
  }


  console.log(evalObject({a:1,b:1,operation:'+'}));
  console.log(evalObject({a:1,b:1,operation:'-'}));
  console.log(evalObject({a:1,b:1,operation:'/'}));
  console.log(evalObject({a:1,b:1,operation:'*'}));
  console.log(evalObject({a:1,b:1,operation:'%'}));
  console.log(evalObject({a:1,b:1,operation:'^'}));