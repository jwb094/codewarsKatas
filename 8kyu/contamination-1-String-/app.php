<?

function contamination(string $text, string $char): string {
  return ($text === "" || $char === "") ? "" : str_repeat($char, strlen($text)); 
}