class Person {
    // Get coding in ES6 :D
    constructor(firstName = "John",lastName = "Doe",age=0,gender="Male") {
        this.FirstName = firstName;
        this.LastName = lastName;
        this.Age = age;
        this.Gender = gender;
        }


        sayFullName = function(){
            return this.FirstName +" " +this.LastName;
        }

        firstName = function(){
            return this.FirstName;
        }

        lastName = function(){
            return this.LastName;
        }

        age (){
            return this.Age;
        }

        gender = function(){
            return this.Gender;
        }

        sayFullName = function(){
            return this.FirstName +" " +this.LastName;
        }


        greetExtraTerrestrials = function(raceName){
            return `Welcome to Planet Earth ${raceName}`;
        }




  }

  let john = new Person();
 console.log(john.firstName);
 console.log(john.lastName);
 console.log(john.age);
 console.log(john.gender);
 console.log(john.sayFullName());
 console.log(Person.greetExtraTerrestrials("Martians"));