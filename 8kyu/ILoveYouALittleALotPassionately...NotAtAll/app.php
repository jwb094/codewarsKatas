<?php
    function how_much_i_love_you(int $nb_petals): string{
        $arr =  [
            "I love you",
            "a little",
            "a lot",
            "passionately",
            "madly",
            "not at all"
        ];
        if (array_key_exists($nb_petals, $arr)) return $arr[$nb_petals - 1];


        if (!array_key_exists($nb_petals, $arr)) {
            return ($nb_petals % count($arr) === 0)
                ? end($arr)
                : $arr[$nb_petals % count($arr) - 1];
        }
}


