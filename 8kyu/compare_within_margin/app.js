function closeCompare(a, b, margin){
 
  if(margin){
    if(Math.abs(a-b) <= margin) {
      return 0;
    }
     return  (a > b)? 1 : -1;
  }

  return  (a > b)? 1 : (a < b ) ? -1 : 0;
}
