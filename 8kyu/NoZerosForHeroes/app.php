<?


// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

function noBoringZeros(int $n): int {
  return (int)rtrim((string)$n,"0");
}