function multiTable(number) {
  let multiTableString = "";
  for (let index = 1; index <= 10; index++) {
    multiTableString += index + ' * ' + number+ ' = '+ index * number + '\n';
  }

  return multiTableString.toString();
}

console.log(multiTable(5));
