Everybody knows the classic "half your age plus seven" dating rule that a lot of people follow (including myself). It's the 'recommended' age range in which to date someone.

Min
=
Age
2
+
7
Min= 
2
Age
​
 +7

Max
=
2
⋅
(
Age - 7
)
Max=2⋅(Age - 7)

Minimum age
≤
Your age
≤
Maximum age
Minimum age≤Your age≤Maximum age

Task
Given an integer (1 <= n <= 100) representing a person's age, return their minimum and maximum age range.

This equation doesn't work when the age <= 14, so if the age <= 14, use this equation instead:

min = age - 0.10 * age
max = age + 0.10 * age
<?php
function datingRange(int $age): string
{
    #return min-max
    $min = 0;
    $max = 0;
    if ($age <= 14) {
        # code...
        $min = floor($age - 0.10 * $age);
        $max = floor($age + 0.10 * $age);
    } else {
        $min = floor($age  / 2 + 7);
        $max = floor(($age  - 7) * 2);
    }
    return '' . $min . '-' . $max . '';
}
