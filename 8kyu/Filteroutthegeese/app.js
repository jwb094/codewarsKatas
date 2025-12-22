function gooseFilter(birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"],
    gooseFiltered = [];

  birds.forEach((element) => {
    if (!geese.includes(element)) {
      gooseFiltered.push(element);
    }
  });
  return gooseFiltered;

  //birds.filter(b => !geese.includes(b));
}

console.log(
  gooseFilter([
    "Mallard",
    "Hook Bill",
    "African",
    "Crested",
    "Pilgrim",
    "Toulouse",
    "Blue Swedish",
  ])
);
