function countGrade(scores) {
  //coding here...


  let s,a,b,c,d,x = 0;
  const S = scores.filter((score, key) => score >= 100);
  const A = scores.filter((score, key) => score < 100 && score >= 90);
  const B = scores.filter((score, key) => score < 90 && score >= 80);
  const C = scores.filter((score, key) => score < 80 && score >= 60);
  const D = scores.filter((score, key) => score < 60 && score >= 0);
  const X = scores.filter((score, key) => score == -1);
  //console.log(S);  console.log(A);  console.log(B);  console.log(C);  console.log(D);  console.log(X);

  return {'S': S.length,'A': A.length,'B': B.length,'C': C.length,'D': D.length,'X': X.length}
}

console.log(countGrade([50, 60, 70, 80, 90, 100]));
//{S:1, A:1, B:1, C:2, D:1, X:0}
console.log(countGrade([65, 75, , 85, 85, 95, 100, 100]));
//{S:2, A:1, B:2, C:2, D:0, X:0}
console.log(countGrade([-1, -1, -1, -1, -1, -1]));
