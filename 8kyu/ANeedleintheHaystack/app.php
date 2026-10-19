Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:

Example(Input --> Output)

["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 
Note: In COBOL, it should return "found the needle at position 6"



<?php

function findNeedle(array $haystack): string
{
    // your code here
    $index = array_search("needle", $haystack);

    return $index !== 0 ? "found the needle at position " . $index : "Your function didn't return anything";
}


//incomplete
print_r(findNeedle($haystack = array('3', '123124234', null, 'needle', 'world', 'hay', 2, '3', true, false)));
print_r("\n");
print_r(findNeedle($haystack  = array('283497238987234', 'a dog', 'a cat', 'some random junk', 'a piece of hay', 'needle', 'something somebody lost a while ago')));
print_r("\n");
print_r(findNeedle($haystack  = array(1, 2, 3, 4, 5, 6, 7, 8, 8, 7, 5, 4, 3, 4, 5, 6, 67, 5, 5, 3, 3, 4, 2, 34, 234, 23, 4, 234, 324, 324, 'needle', 1, 2, 3, 4, 5, 5, 6, 5, 4, 32, 3, 45, 54)));
