function sorter(textbooks) {
  return textbooks.sort(function (a, b) {
    return a.toLowerCase() > b.toLowerCase() ? 1 : -1;
  });
}

console.log(sorter(["Algebra", "History", "Geometry", "English"])); //['Algebra', 'English', 'Geometry', 'History']

console.log(sorter(["Algebra", "history", "Geometry", "english"])); // ['Algebra', 'english', 'Geometry', 'history']
