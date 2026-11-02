/*
Color Ghost
Create a class Ghost

Ghost objects are instantiated without any arguments.

Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated

ghost = new Ghost();
ghost.color //=> "white" or "yellow" or "purple" or "red"
*/

class Ghost {
    constructor() {
        const colours = ["white", "yellow", "purple", "red"];
        const randomIndex = Math.floor(colours.length * Math.random());
        this.color = colours[randomIndex];
    }

}