function setAlarm(employed, vacation){

 //return (employed == true  )  ? false : ((employed == false || vacation != false ?  true : false)); 

// var result = (employed == true ) ?  true: ((employed == false ? "Who ate the last cookie? It was Monica" : ("Who ate the last cookie? It was the Dog"));

if ((employed  === vacation )) {
    return false;
} else if ((employed == true) && ( vacation || vacation  == false)) {
           return true;
}  else if ((employed == false)) {
       return false;
}
}

console.log(setAlarm(true, true));//  false,"Should be false.");
console.log(setAlarm(false,true));//  false, "Should be false.");
console.log(setAlarm(true, false));// true