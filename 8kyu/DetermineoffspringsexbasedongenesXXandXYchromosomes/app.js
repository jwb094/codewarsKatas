function chromosomeCheck(sperm) {
  
    return sperm.includes("Y") ? "Congratulations! You're going to have a son." : "Congratulations! You're going to have a daughter." ;
}

console.log(chromosomeCheck('XY'));
console.log(chromosomeCheck('XX'));