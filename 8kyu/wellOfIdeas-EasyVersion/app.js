function well(x) {
  const noOfGoods = x.filter((item) => item === "good");

  if (noOfGoods.length === 0) {
    return "Fail!";
  }

  if (noOfGoods.length === 1 || noOfGoods.length === 2) {
    return "Publish!";
  }

  if (noOfGoods.length > 2) {
    return "I smell a series!";
  }
}
