const Members = require("./Members");
const MyStringFunctions = require("./MyStringFunctions");

/* Moved into Members.js -> I can access from getter
// Array of course-objects
const courseDetails = [
    {
        courseName : 'Automation',
        price : 1000,
        length : 6
    },
    {
        courseName : 'QA',
        price : 2000,
        length : 8
    },
    {
        courseName : 'Mobile',
        price : 3000,
        length : 12
    }
]*/

class Students extends Members {

    static #idValue = 0;
    #student = {
        sId : 0,
        sGrade : '',
        sCourseDetails : {
            courseName : '',
            coursePrice : 0,
            courseLength : 0,
        },
        sBalance : 0
    }
    //getter
    getGrade(){
        return this.#student.sGrade;
    }
    // set Grade
    setGrade(grade) {
        this.#student.sGrade = grade;
        //console.log('Student recieved a grade of ' + grade + ', grade set to ' + this.#student.sGrade);
    }
    // get sId
    getSId() {
        return this.#student.sId;
    }
    /**
     * age >= 16
     *      if not, do not enroll and show message, student has to be of 16 or above
     *
     * if invalid studentCourse
     *      do not enroll and show message, student should provide correct course name
     * 
     * all students must be within usa (USA, United States of America)
     *      if not, do not enroll and show message, student has to inside the United States of America
     * 
     * if data is correct
     *      Congratulations for enrolling in <courseName>
     *      Student id : XX
     */
    constructor(studentName, studentAge, studentCountry, studentCourse) {
        super(); // This is calling the member constructor
        if (studentAge >= 16 && this.isCourseNameValid(studentCourse) && studentCountry.toLowerCase().localeCompare('usa') === 0 ) {
            const courseData = this.isCourseNameValid(studentCourse);
            this.member.name = MyStringFunctions.toTitleCase(studentName);
            this.member.age = studentAge;
            this.member.location = studentCountry.toUpperCase();
            this.#student.sCourseDetails.courseName = courseData.courseName;
            this.#student.sCourseDetails.coursePrice = courseData.price;
            this.#student.sCourseDetails.courseLength = courseData.length;
            this.#student.sBalance = courseData.price;
            this.#student.sId = ++Students.#idValue;

            // Get the list of students from schoool members
            let students = this.getStudents();
            students.push(this);
            this.setStudents(students);
            console.log(`\nThank you for enrolling.\nYour id value is ${this.#student.sId}\n`);
        } else {
            console.log("\nDO NOT ENROLL");
        }
    }


    showMyDetails() {
        console.log(`\nStudent details:\nId: ${this.#student.sId}`);
        super.showMyDetails();
        console.log(`Course name: ${this.#student.sCourseDetails.courseName}\nBalance: $${this.#student.sBalance}\n`);
        // console.log(this.student);
    }

    
    /**
        changeCourse
        submitDocuments
        makePayment
        dropOut
        orderBooks
    */


    static messageFromClass2022(msg) {
        console.log(`\nMessage to institute from the Class of 2022:\n${msg}\n`);
    }

    /**
     * changeCourse
     * 
     * input: newCourseName
     * 
     * if newCourseName is valid AND student is not already enrolled in the course
     *      then change the course name
     *      update the course-length as per the new course-length
     *      update the course-price as per the new course-price
     *      update the student-balance as per the new course-price
     * 
     * if newCourseName is invalid
     *      then print msg -> Invalid course name
     * 
     * if student is already enrolled in the course
     *      then print -> You are already enrolled in the course
     * 
     */
    
    changeCourse(newCourseName){
        if(newCourseName.toLowerCase() === this.#student.sCourseDetails.courseName.toLowerCase()){
            console.log('You are already enrolled in the course');
        }
        else if(this.isCourseNameValid(newCourseName) && this.#student.sCourseDetails.courseName.length > 0){
            const courseData = this.isCourseNameValid(newCourseName);
            this.#student.sCourseDetails.courseName = MyStringFunctions.toTitleCase(newCourseName);
            this.#student.sCourseDetails.courseLength = courseData.length;
            this.#student.sCourseDetails.coursePrice = courseData.price;
            this.#student.sBalance = courseData.price;
        }
        else{
            console.log('Invalid Course Name')
        }
    }

    /**
     * makePayment
     * 
     * input : amount
     * 
     * if amount is > 0 and less or equal to balance
     *      print -> Thank you for making payment of $amount
     *      and update the student balance.
     *      if balance is zero, print -> No more payment required.
     *      else -> Updated balance is $balance
     * 
     * if amount is invalid
     *      print -> Invalid amount. Your balance is $balance
     * 
     */
    makePayment(amount){    
        //const courseData = this.isCourseNameValid(newCourseName);
        if(amount > 0 && amount <= this.#student.sBalance){
            console.log('Current student balance: ' + this.#student.sBalance)
            this.#student.sBalance -= amount;
            console.log(`Thank you for making payment of $${amount} your new balance is $${this.#student.sBalance}`)
            if(this.#student.sBalance === 0){
                console.log('No more payment required')
            }
        }
        else{
            console.log(`Invalid amount, your balance is ${this.#student.sBalance}`)
        }
    }


}
module.exports = Students;