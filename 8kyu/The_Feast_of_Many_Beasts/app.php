<?

function feast(string $beast,string $dish): bool{
  return (substr($beast,0,1) === substr($dish,0,1)) 
            && (substr($beast,-1,1) === substr($dish,-1,1));
}