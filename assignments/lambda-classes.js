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
    changeGrade(student) {
        let addOrSubGradePoints = Math.round(Math.random() * 10);
        if (student.grade >= 70) {
            student.grade -= addOrSubGradePoints;
            return console.log(`${this.name} has subtracted ${addOrSubGradePoints} points to ${student.name}'s grade. Their grade is now ${student.grade}.`);
        } else {
            student.grade += addOrSubGradePoints;
            return console.log(`${this.name} has added ${addOrSubGradePoints} points to ${student.name}'s grade. Their grade is now ${student.grade}.`);
        }
    }
}


//Student class constructor
class Student extends Person {
    constructor(studentProps) {
        super(studentProps);
        this.previousBackground = studentProps.previousBackground;
        this.className = studentProps.className;
        this.favSubjects = studentProps.favSubjects;
        this.grade = studentProps.grade;
        //stretch assignment^^^^
    }
    //Student Methods
    listsSubjects() {
        this.favSubjects.map(function (favSub){
            return console.log(favSub);
        });
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
    graduate(instructorOrPM) {
        if (this.grade >= 70) {
            return console.log(`${this.name} has passed all assignments and graduated from Lambda School!!!`)
        } else {
            console.log(`${this.name} must raise their grade in order to graduate.`)
            instructorOrPM.changeGrade(this);
            if(this.grade <= 70) {
                this.graduate(instructorOrPM);
                this.graduate(instructorOrPM);

            }
        }
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


//Objects--- Instructors

const htmlHenry = new Instructor({
    name: 'HTML Henry',
    location: 'Houston',
    age: 40,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: "I don't even like HTML. I don't know why I was named HTML Henry."
});

const cssSusan = new Instructor({
    name: 'CSS Susan',
    location: 'Seatle',
    age: 36,
    gender: 'female',
    favLanguage: 'CSS',
    specialty: 'LESS CSS',
    catchPhrase: "Make sure your cascade is in the correct order!"
})


//Objects--- Students

const james = new Student({
    name: 'James',
    location: 'Philadelphia',
    age: 23,
    gender: 'male',
    previousBackground: 'Finance',
    className: 'Web17',
    favSubjects: ['HTML', 'CSS', 'JavaScript'],
    grade: 99,
});

const bobby = new Student({
    name: 'Bobby Boucher',
    location: 'Louisiana',
    age: 31,
    gender: 'male',
    previousBackground: 'Middle Linebacker for the South Central Louisiana Mud Dogs',
    className: 'Web15',
    favSubjects: ['Water', 'H20', 'Agua', 'Not Gatorade'],
    grade: 60,
});

//Objects--- ProjectManagers

const nathan = new ProjectManagers({
    name: 'PM Nathan',
    location: 'Baltimore',
    age: 29,
    gender: 'male',
    gradClassName: 'FSW1',
    favInstructor: 'CSS Susan'
});

const kate = new ProjectManagers({
    name: 'PM Kate',
    location: 'San Fransisco',
    age: 34,
    gender: 'female',
    gradClassName: 'FSW4',
    favInstructor: 'HTML Henry'
});

//instructors-props
console.log(cssSusan.name); //'CSS Susan'
console.log(htmlHenry.location); //'Houston'
console.log(cssSusan.age); //36
console.log(htmlHenry.gender); //'male'
console.log(cssSusan.favLanguage); // 'CSS'
console.log(htmlHenry.catchPhrase); //'I don't even like HTML. I don't know why I was named HTML Henry'

//instructors-methods
cssSusan.demo('JS II'); //'Today we are learning about JS II
htmlHenry.grade(james, 'Advanced CSS'); //'James receives a perfect score on Advanced CSS'


//student-props
console.log(bobby.previousBackground);//'Middle Linebacker for the South Central Louisiana Mud Dogs'
console.log(james.className);//'Web17'
console.log(bobby.favSubjects);//'["Water", "H20", "Agua", "Not Gatorade"]

//student-methods
james.listsSubjects();
/*
HTML
CSS
JavaScript
*/
bobby.PRAssignment('React');//'Bobby Boucher has submitted a PR for React'
james.sprintChallenge('JS IV');//'James has begun sprint challenge on JS IV'

//projectmanagers-props
console.log(nathan.gradClassName);//'FSW1'
console.log(kate.favInstructor);//'HTML Henry'

//projectmanagers-methods
nathan.standUp('#Web17-Nathan');// 'PM Nathan announces to #Web17-Nathan, @channel standy times!'
kate.debugsCode(james, 'Node.js');// 'PM Kate debugs James's code on Node.js'

james.graduate(nathan);
bobby.graduate(htmlHenry);