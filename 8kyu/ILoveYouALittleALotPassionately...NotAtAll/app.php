<?php function how_much_i_love_you(int $nb_petals){
     if ($nb_petals > 6) {
        $result =  $nb_petals % 6;
    } else {
        $result =  $nb_petals;
    }
    echo $result;
    switch ($result) {
     
        // case 0:
        //   return "I love you";
        //     break;
        // case 1:
        //   return "I love you";
        //     break;
        // case 2:
        //    return "a little"; 
        //     break;
        // case 3:
        //     return "a lot";
        //     break;
        // case 4:
        //     return "passionately";
        //     break;
        // case 5:
        //     return "madly";
        //     break;
        // case 6:
        //     return "not at all";
        //     break;

    }
}

echo how_much_i_love_you(7);

echo how_much_i_love_you(8);

echo how_much_i_love_you(12);

echo how_much_i_love_you(20);


/*
1"I love you"
2"a little"
3"a lot"
4"passionately"
5"madly"
6"not at all"
7(1)"I love you"
8(2)"a little"
9(3)"a lot"
10(4)"passionately"
11(5)"madly"
12(6)"not at all"
13(1)"I love you"
14(2)"a little"
15(3)"a lot"
16(4)"passionately"
17(5)"madly"
18(6)"not at all"
19(1)"I love you"
20(2)"a little"
21"a lot"
22"passionately"
23"madly"
24"not at all"