function getGrade (s1, s2, s3) {
    // Code here
      let avg = (s1+s2+s3) / 3;
  if (avg >= 90 && avg < 100) {
      return "A";
  } else if (avg >= 80 && avg < 90) {
      return "B";
  } else if (avg >= 70 && avg < 80) {
      return "C";
  } else if (avg >= 60 && avg < 70 ) {
      return "D";
  } else{
       return "F";
  }
    
  }

console.log(getGrade(95, 90, 93));
console.log(getGrade(100, 85, 96));
console.log(getGrade(92, 93, 94));
