<?php
function likes($names)
{
    if (empty($names)) {
        return "no one likes this";
    }
    // var_dump(count($names));

    if (count($names) >= 4) {
        $firstTwoNames = array_slice($names, 0, 2);
        $firstTwoNames[0] = $firstTwoNames[0] . ',';
        return implode(" ", $firstTwoNames) . " and " . (count($names) - count($firstTwoNames)) . " others like this";
    }


    if (count($names) === 3) {
        $names[0] = $names[0] . ',';
        $names['1.5'] = 'and';
        array_push($names, "like this");
    }

    if (count($names) === 2) {
        $names['0.5'] = 'and';
        array_push($names, "like this");
    }

    if (count($names) === 1) {
        array_push($names, "likes this");
    }

    ksort($names);

    return implode(" ", $names);
}


var_dump(likes([])); // 'no one likes this', 
var_dump(likes(['Peter'])); // 'Peter likes this',
var_dump(likes(['Jacob', 'Alex'])); // 'Jacob and Alex like this', 
var_dump(likes(['Max', 'John', 'Mark'])); // 'Max, John and Mark like this', 
var_dump(likes(['Alex', 'Jacob', 'Mark', 'Max']));// 'Alex, Jacob and 2 others like this', 