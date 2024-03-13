<?php
function greet($name) {
    return ($name == 'Johnny') ?  'Hello, my love!' : "Hello, $name!"; 
}


echo(greet("Jim"));
echo(greet("Jane"));
echo(greet("Simon"));
echo(greet("Johnny"));