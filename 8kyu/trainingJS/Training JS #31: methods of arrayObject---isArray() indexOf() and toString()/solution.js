function blackAndWhite(arr) {


  if (Array.isArray(arr) === false) {
    return `It's a fake array`;
  }
  const filtered = arr.filter((x) => {
    return x === 5 || x === 13;
  });
  filter = new Set(filtered);
  console.log(filter);
  if (filter.size <= 1) {
    return `It's a white array`;
  }
  if (filter.size == 2) {
    return `It's a black array`;
  }
}
