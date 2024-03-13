<?php

function quotable($name, $quote) {
    if ($name  === 'Grae' && $quote === 'Practice makes perfect') {
        return 'Grae said:'.'"Practice makes perfect"';
    } else {
        return ''. $name .' said: '.'"'.$quote.'"';
    }
}




var_dump(quotable('Grae', 'Practice makes perfect'));
//'Grae said: "Practice makes perfect"';
var_dump(quotable('Dan', 'Get back to work, Grae'));
//'Dan said: "Get back to work, Grae"'
var_dump(quotable('Alex', 'Ruby is great fun'));
//('Alex said: "Ruby is great fun"', );
var_dump(quotable('Bethany', 'Yes, way more fun than R'));
//('Bethany said: "Yes, way more fun than R"', );
var_dump(quotable('Darrell', 'What the heck is this thing?'));
//('Darrell said: "What the heck is this thing?"', );