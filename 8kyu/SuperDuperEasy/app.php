<?

# Make a function that returns the value multiplied by 50 and increased by 6. 
# If the value entered is a string it should return "Error".



/**
 * Summary of problem
 * @param mixed $x
 * @return int|string
 */
function problem($x){
    return !is_numeric($x) ? "Error" :  $x * 50 +6;
}