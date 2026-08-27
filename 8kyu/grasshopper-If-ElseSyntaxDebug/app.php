<?

function checkAlive(string $health): bool {
    if ($health <= 0) {
        return false;
    } else {
        return true;
    }
}