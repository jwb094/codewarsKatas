function find(array, element) {
  //console.log(array.includes(element));
  return array.includes(element) ?array.indexOf(element):"Not Found";
  return a.includes(e) ?a.indexOf(e):"Not Found";
//return array.indexOf(element)!==-1?array.indexOf(element):"Not Found";

  }

  var array = [2,3,5,7,11];

  console.log(find(array, 5));//2
  console.log(find(array, 11));//4
  console.log(find(array, 3));//1
  console.log(find(array, 2));//0
  console.log(find(array, 7));//3
  console.log(find(array, 1));//Not Found
  console.log(find(array, 8)); //Not Found 

    //return array.filter((e,i) => e == element).length == 1 ? array.filter((e,i) => e == element ) : "Not Found";
/*
  for (let i = 0; i < array.length; i++) {
      if (array[i] === element) return i;
    }
    return "Not found";*/