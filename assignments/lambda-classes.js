// CODE here for your Lambda Classes

//Person class constructor
class Person {
    constructor(personProps) {
        this.name = personProps.name;
        this.age = personProps.age;
        this.location = personProps.location;
        this.gender = personProps.gender;
    }
    //Person Methods
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`)
    }
}

/*--------------------------children of Person-----------------------------------------*/

//Instructor class constructor
class Instructor extends Person {
    constructor(instructorProps) {
        super(instructorProps);
        this.specialty = instructorProps.specialty;
        this.favLanguage = instructorProps.favLanguage;
        this.catchPhrase = instructorProps.catchPhrase;
    }
    //Instructor Methods
    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }
    grade(studentName, subject) {
        console.log(`${studentName} receives a perfect score on ${subject}`);
    }
}


//Student class constructor



/*--------------------------children of Person END-----------------------------------------*/