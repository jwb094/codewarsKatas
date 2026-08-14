<? 

function equivalent(string $body,string $char):string {
  // your code here
  
$pattern = "/" . preg_quote($char, '/') . "$/";
preg_match($pattern, $body, $matches);

return isset($matches[0]) ? true : false;
}    