function subtractSum(n) {
  const fruits = [
    "kiwi",
    "pear",
    "kiwi",
    "banana",
    "melon",
    "banana",
    "melon",
    "pineapple",
    "apple",
    "pineapple",
    "cucumber",
    "pineapple",
    "cucumber",
    "orange",
    "grape",
    "orange",
    "grape",
    "apple",
    "grape",
    "cherry",
    "pear",
    "cherry",
    "pear",
  ];

  //console.log(fruits.length);
  let max = fruits.length;

  do {
    let total = n
      .toString()
      .split("")
      .reduce((carry, number) => carry + Number(number), 0);
    n = n - total;
  } while (n >= max);
  return fruits[n - 1]; // fruit name like "apple"
}
