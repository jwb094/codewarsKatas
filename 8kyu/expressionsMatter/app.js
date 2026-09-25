/**
Given three integers a, b, and c, return the largest number obtained after inserting the operators +, *, and parentheses (). In other words, try every combination of a, b, and c with the operators, without reordering the operands, and return the maximum value.
 */

function expressionMatter(a, b, c) {
  const first = a + b + c;
  const second = a + b * c;
  const third = a * b + c;
  const fourth = a * b * c;
  const fifth = a + b + c;
  const sixth = a + (b + c);
  const seventh = (a + b) * c;
  const eighth = a * (b + c);
  const nineth = a * b + c;
  const tenth = a * (b + c);
  const eleventh = a * b * c;
  const twevleth = a * (b * c);

  let result = [
    first,
    second,
    third,
    fourth,
    fifth,
    sixth,
    seventh,
    eighth,
    nineth,
    tenth,
    eleventh,
    twevleth,
  ].sort((a, b) => {
    return b - a;
  });

  return result[0]; // highest achievable result
}
