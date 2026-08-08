<?
function remove(string $s): string {
  // Coding and coding ... 
  return preg_replace("/!$/", '', $s );
}