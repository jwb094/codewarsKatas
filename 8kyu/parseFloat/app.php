<?php
function parseFloat(string $s): mixed
{
 return (float) $s != 0 ? (float) $s : null;
}