<?
function getAge(string $response): int {

   preg_match("/\d/",$response,$matches);
    return $matches[0];
}