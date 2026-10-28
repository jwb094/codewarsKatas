function countBy(x, n) {
  return Array.from({ length: n }, (a, i) => (i + 1) * x);
}