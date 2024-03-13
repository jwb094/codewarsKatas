//var regex=/[A-Za-z0-9_]\s{2,6}/ig;
/**
 * /([a-zA-Z0-9_|a-zA-Z0-9_\(.)]){2,6}/ig
 * 
 */
var regex=/([(.)a-zA-Z0-9_(.)|(.)a-zA-Z0-9_(.)]{2,6})/ig;

console.log("aa bbb cccc ddddd eeeeee fffffff".match(regex));//, [ 'aa', 'bbb', 'cccc', 'ddddd', 'eeeeee', 'fffffff' ]);
console.log("aaa bcccd".match(regex));//, [ 'aaa' ]);
console.log("_x_x_ --- ~~|~~".match(regex));//, [ '_x_x_' ]);
console.log("ABCDCBA ABABABA".match(regex));//, [ 'ABCDCBA', 'ABABABA' ]);
console.log("121 1221 13577531 11211".match(regex));// , [ '121', '1221', '11211' ]);
console.log("aabbbcccc d".match(regex));//, null);
console.log("abbA CdDc".match(regex));//, null);
console.log("1    1".match(regex));//, null  );
console.log("1231 12341 123451 1234561".match(regex));//, null  );


/**
 * 
 * 
 * \d   Matches a digit character.                    Equivalent to [0-9].
\D   Matches a nondigit character.                 Equivalent to [^0-9].
\w   Matches any letters, numbers and underscore.  Equivalent to [A-Za-z0-9_].
\W   Matches any character except lettes, numbers and underscore. 
     Equivalent to [^A-Za-z0-9_].
\s   Matches any whitespace character.             Equivalent to [\f\n\r\t\v].
\S   Matches any non-whitespace character.         Equivalent to [^\f\n\r\t\v].
\b   Matches a word boundary; that is, the position between a word and a whitespace.
\B   Matches a word non-boundary.
 */