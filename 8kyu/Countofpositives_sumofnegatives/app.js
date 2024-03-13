function countPositivesSumNegatives(input) {
    // your code here
    //ATTEMPT 2

    if(input === null || input.length == 0){
return  [] ;
    } else{
        let positive_counter =0;
        let negative_counterSUM =0;

        input.forEach(element => {
            if (Math.sign(element) == 1) {
              
                positive_counter++;
              
            }   else {
                negative_counterSUM = negative_counterSUM + element;
            }
        });
     return [positive_counter, negative_counterSUM];
    
    }
}
    //ATTEMPT 1
   /* let positive_counter =0;
    let negative_counterSUM =0;
    input.forEach(element => {
        if (Math.sign(element) == 1) {
          
            positive_counter++;
          
        }   else {
            negative_counterSUM = negative_counterSUM + element;
        } 
    });
    //console.log(positive_counter);
    //console.log(negative_counterSUM);
    return (input == (null || "")) ? [] : [positive_counter, negative_counterSUM];
    return [positive_counter, negative_counterSUM];*/


  console.log(countPositivesSumNegatives( [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));
  console.log(countPositivesSumNegatives( null));