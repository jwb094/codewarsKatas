function ensureQuestion(s) {
  // Code here

  return s.indexOf("?") > -1 ? s : `${s}${"?"}`;
}

console.log(ensureQuestion(""));
console.log(ensureQuestion("Yes"));
console.log(ensureQuestion("No?"));
