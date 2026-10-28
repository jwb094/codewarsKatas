
/**
 Define a method hello that returns "Hello, Name!" 
 to a given name, or says Hello, World! if name is not given (or passed as an empty String).

    Example 
    "john"  => return "Hello, John!"
    ""        => return "Hello, World!"
 */

function hello(name) {
 return name === "" || !name ? "Hello, World!" 
        :  `Hello, ${name.charAt(0).toUpperCase()+ name.slice(1).toLowerCase()}!`
}