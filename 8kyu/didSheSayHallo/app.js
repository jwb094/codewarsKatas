function validateHello(greetings) {
   return /hello|ciao|salut|hallo|hola|ahoj|czesc/ig.test(greetings);
  }

//const validateHello = greetings => /hello|ciao|salut|hallo|hola|ahoj|czesc/ig.test(greetings);

 console.log(validateHello('ahoj'));//, true)
 console.log(validateHello('meh'));//, false)