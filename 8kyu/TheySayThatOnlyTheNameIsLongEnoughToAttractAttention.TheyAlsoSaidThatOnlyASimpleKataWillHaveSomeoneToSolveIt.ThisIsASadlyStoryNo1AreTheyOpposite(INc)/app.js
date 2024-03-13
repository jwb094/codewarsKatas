function isOpposite(s1,s2){
    //coding here...
    if (s1.length === 0 && s2.length === 0 )  {return false}
    if (s1.length !== s2.length )  {return false}
    const ans = s1.split("").filter((v,i) => v === s2[i]) ;
    //console.log(ans);
    if (ans.length > 0)  {return false}
    if (ans.length === 0)  {return true}
    
}

/*
  console.log(isOpposite("ab","AB"));//true
    console.log(isOpposite("aB","Ab"));//true
  console.log(isOpposite("aBcd","AbCD"));//true
  console.log(isOpposite("aBcde","AbCD"));//false
  console.log(isOpposite("AB","Ab"));//false
  console.log(isOpposite("",""));//false
  */
  console.log(isOpposite("JAAavNAGbzVM","jaaAVnagBZvm"));//false