<?php

function magical_well($a, $b, $n) {
   // $i=0;
   $total=0;
    for ($i=0; $i < $n; $i++) { 
        # code...

        $total += (($a + $i )* ($b + $i ));
   //   var_dump($total);
        // $a++; 
        // $b++;
      
    }
//     //var_dump($total);
//     $total = 0;
//     do {
//         # code...
//         $total += $a * $b;
//         $a++;
//         $b++;
   
//         $i += 1;
//     } while ($i === $n  );
//    // return ;
//    var_dump($total);

return $total;
   }

//   I FUlly didn;t understand the kyu



  var_dump(magical_well(1,2,2));//8
  var_dump(magical_well(1,1,1));//1
  var_dump(magical_well(6,5,3));//128