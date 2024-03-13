function capitalizeWord(word) {
 //word=  word.toUpperCase();
 //console.log(word.charAt(0).toUpperCase()+ word.slice(1));
 //console.log(word.charAt(0).toUpperCase());
  return word.charAt(0).toUpperCase()+ word.slice(1);
}

console.log(capitalizeWord('word'));
console.log(capitalizeWord('i'));
console.log(capitalizeWord('glasswear'));