<?

function chromosomeCheck(string $sperm): string {
  // code goes here
  
   return  str_contains($sperm,'Y') === true ? 'Congratulations! You\'re going to have a son.': 'Congratulations! You\'re going to have a daughter.';
}