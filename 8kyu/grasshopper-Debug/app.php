<?


/**
 function weatherInfo(int $temp): string
{
  $c: convert($temp) 2 error here
    if($c > 0) {
      return ($c . " is freezing temperature") 1 error here
    } else {
      return ($c . " is above freezing temperature") 1 error here
    }
}
    
function convertToCelsius(int $temperature): int
{
  $celsius = ($tempertur) - 32 + (5/9) 2 error here
  return $temperature * error here
} 
 */


function weatherInfo(int $temp): string{
  $c = convertToCelsius($temp);
    echo $c;
    if($c > 0) {
        return ($c . " is above freezing temperature");
    } else {
        return ($c . " is freezing temperature");
    }
}
    
function convertToCelsius(int $temperature): int
{
  $celsius = ($temperature - 32) * (5/9);

  return $celsius;
} 
