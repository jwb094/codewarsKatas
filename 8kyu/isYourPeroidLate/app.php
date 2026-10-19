function periodIsLate($last, $today, $cycleLength) {
    return $last->diff($today)->days > $cycleLength;
}

<?


function periodIsLate(DateTime $last,DateTime $today,int $cycleLength):bool {
    return $last->diff($today)->days > $cycleLength;
}