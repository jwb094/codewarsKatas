//var regex=/^((http|https):\/.)(www\.|.*)[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-](\.com|\.org)/ig;
var regex=/(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)([\w]+.)(com|net)/ig
//var regex=//;

//^((http|https):\/.)(www\.|.*)([a-zA-Z0-9])(\.)(com|net)
//^((http|https):\/.)(www\.|.*[a-zA-Z0-9.])(\.com|\.net)
//^((http|https):\/.)(.*)\.(com|net)
//^http:|https:\/.
//(http:\/.|https:\/.)[a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)(\.com|\.net)
//[a-zA-Z0-9_.]+(\.[a-zA-Z0-9_]+)(\.com|\.net)
//) ([a-zA-Z0-9_.(\.[a-zA-Z0-9_]+)(\.com|\.net)
//^(http|https)(\/|(...)+)(\/|(...)+)([a-zA-Z0-9_.(\.[a-zA-Z0-9_]+)(\.com|\.net)

//(http:\/.|https:\/.)(www\.|.*)(\.[a-zA-Z0-9_]+)
///([a-z])+\.(com|net)
///\.(com|net)\/?$/
//((http(s?))\:\/\/)[a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)**
//((http|https):\/.)(www|.*)([\w+])(\.com|\.net)**
//(http:\/.|https:\/.)[a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)(\.com|\.net)/ig;***
//(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)([\w-]+.)(com|net)***
//(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)([\w]+.)(com|net)***
//(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)([\w]+.)([com|net]+)***
//var regex=/(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)([\w-]+.)(com.net|com|net)/ig;****
console.log("http://codewars.com".match(regex));//, [ 'http://codewars.com' ]);
console.log("http://www.codewars.com".match(regex));//, [ 'http://www.codewars.com' ]);
console.log("HTTP://CODEWARS.COM".match(regex));//, [ 'HTTP://CODEWARS.COM' ]);
console.log("https://www.codewars.com".match(regex));//, [ 'https://www.codewars.com' ]);
console.log("http://www.codewars.net".match(regex));//, [ 'http://www.codewars.net' ]);
console.log("1234http://www.codewars.comabcd".match(regex));//, [ 'http://www.codewars.com' ]);
console.log("http://www.codewars1.com!@#$%http://www.codewars2.net".match(regex));//, [ 'http://www.codewars1.com', 'http://www.codewars2.net' ]);
console.log("http://www.codewars1.comabchttp://www.codewars2.net".match(regex));//, [ 'http://www.codewars1.com', 'http://www.codewars2.net' ]);
console.log("http://www.codewars.com.net".match(regex));//, [ 'http://www.codewars.com.net' ]);
console.log("http://www.codewars.com.fak".match(regex));//, [ 'http://www.codewars.com' ]);

console.log("ftp://www.codewars.com".match(regex));//,null);
console.log("http://www.code#wars.com".match(regex));//,null);
console.log("http://www.codewars.org".match(regex));//,null);
console.log("http://www . codewars . com".match(regex));//,null);
console.log("http://mail@codewars.com".match(regex));//,null);
console.log("http://.com".match(regex));//, null);



