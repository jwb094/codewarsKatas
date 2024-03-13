function sayHello( name, city, state ) {
    //console.log(name.toString().replaceAll(',' ,' '));
    return "Hello, "+ name.toString().replaceAll(',' ,' ').concat("!").trim()+ " Welcome to "+ city +", " +  state.concat("!") ;
    //return "Hello, "+ name.toString().replaceAll(',' ,' ').concat("!").trim()+ " Welcome to "+ city +", " +  state.concat("!") ;
}


console.log(sayHello(['John', 'Smith'], 'Phoenix', 'Arizona'));
console.log(sayHello(['Franklin','Delano','Roosevelt'], 'Chicago', 'Illinois'));
console.log(sayHello(['Wallace','Russel','Osbourne'],'Albany','New York'));