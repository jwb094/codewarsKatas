function solve(s){
    //..
    //console.log(/0-9/g.test(s));
    // console.log(s.match(/\W|_/g));
    // console.log(s.match(/[A-Z]/g));
    // console.log(s.match(/[a-z]/g));
    // console.log(s.match(/\d/g));

    return [(s.match(/[A-Z]/g) !== null ? s.match(/[A-Z]/g).length : 0),(s.match(/[a-z]/g) !== null ? s.match(/[a-z]/g).length : 0),(s.match(/\d/g) !== null ? s.match(/\d/g).length : 0),(s.match(/\W|_/g) !== null ? s.match(/\W|_/g).length : 0)];
   }


   console.log(solve(""));//[0,0,0,0]
   console.log(solve("aAbBcC"));//[3,3,0,0]);
   console.log(solve("Codewars@codewars123.com"));//[1,18,3,2]
   console.log(solve("bgA5<1d-tOwUZTS8yQ"));//[7,6,3,2]
   console.log(solve("P*K4%>mQUDaG$h=cx2?.Czt7!Zn16p@5H"));//[9,9,6,9]
   console.log(solve("RYT'>s&gO-.CM9AKeH?,5317tWGpS<*x2ukXZD"));//[15,8,6,9]
   console.log(solve("$Cnl)Sr<7bBW-&qLHI!mY41ODe"));//[10,7,3,6]
   console.log(solve("@mw>0=QD-iAx!rp9TaG?o&M%l$34L.nbft"));//[7,13,4,10]