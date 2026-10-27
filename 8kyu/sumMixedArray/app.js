function sumMix(x){
  return x
    .map((element)=> Number(element))
    .reduce((previousValue,currentValue)=> previousValue + currentValue ,0)
}