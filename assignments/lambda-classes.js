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
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
}


//Student class constructor
class Student extends Person {
    constructor(studentProps) {
        super(studentProps);
        this.previousBackground = studentProps.previousBackground;
        this.className = studentProps.className;
        this.favSubjects = studentProps.favSubjects;
    }
    //Student Methods
    listsSubjects() {
        this.favSubjects.forEach(function (favSub){
            console.log(favSub);
        });
    }
    PRAssignment(subject) {
        console.log(`${student.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject) {
        console.log(`${student.name} has begun sprint challenge on ${subject}`);
    }
}
/*--------------------------children of Person END-----------------------------------------*/


/*--------------------------children of Instructor-----------------------------------------*/

//ProjectManagers class constructors
class ProjectManagers extends Instructor {
    constructor(projManProps) {
        super(projManProps);
        this.gradClassName = projManProps.gradClassName;
        this.favInstructor = projManProps.favInstructor;
    }
    //ProjectManagers Methods
    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}


/*--------------------------children of Instructors END-----------------------------------------*/