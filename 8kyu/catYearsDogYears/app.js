var humanYearsCatYearsDogYears = function(humanYears) {
    // Your code here!

    let catYears = 0;
    let dogYears = 0;
    for (let index = 1; index <= humanYears; index++) {
        console.log(index);
        // const element = array[index];
        if (index === 1) {
            catYears =  15;
            dogYears =  15;
        } else if (index === 2) {
            catYears = catYears + 9;
            dogYears = dogYears + 9;
        } else {
            catYears = catYears + 4;
            dogYears = dogYears + 5;
        }
       // console.log(dogYears);
    }
    
    return [humanYears,catYears,dogYears];
  }
  

  console.log(humanYearsCatYearsDogYears(1))
  console.log(humanYearsCatYearsDogYears(2));
  console.log(humanYearsCatYearsDogYears(10))