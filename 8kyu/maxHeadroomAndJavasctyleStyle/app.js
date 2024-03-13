function getMax1()
{
  var max = 
  {
   name: 'Max Headroom'
  }
  return max;
}

function getMax2()
{
     var max = 
  {
    name: 'Max Headroom'
  }
  return max;
}
console.log(Object.values(getMax2()).toString() === Object.values(getMax1()).toString());
console.log(JSON.stringify(getMax2()));

console.log(stringify(getMax2()) === stringify(getMax1()));