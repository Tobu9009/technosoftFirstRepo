const Members = require("./Members");
const MyStringFunctions = require("./MyStringFunctions");

const courseDetails = [
    {
        courseName : 'Automation',
    },
    {
        courseName : 'QA',
    },
    {
        courseName : 'Mobile',
    }
]
class Teachers extends Members {

    static #idValue = 0;

    #teacher = {
        tId : 0,
        tCourseName : '',
        tSalary : 0
    }

    /**
     * 
     * age >= 21
     * 
     * teacherCourseName should be Automation, QA or Mobile
     * 
     */

    #isCourseNameValid(checkForCourse) {
        return courseDetails.find(course => course.courseName.toLowerCase().localeCompare(checkForCourse.toLowerCase()) === 0);
    }

    hiring(teacherName, teacherAge, teacherCountry, teacherCourseName) {
        if(teacherAge >= 21 && this.#isCourseNameValid(teacherCourseName) && teacherCountry.toLowerCase().localeCompare('usa') === 0){
            const courseData = this.#isCourseNameValid(teacherCourseName);
            this.member.name = MyStringFunctions.toTitleCase(teacherName)
            this.member.age = teacherAge;
            this.member.location = teacherCountry;
            this.#teacher.tId = ++Teachers.#idValue;
            this.#teacher.tCourseName = courseData.courseName;
        }
        else{
           console.log('Invalid credentials')
        }
    }

    showMyDetails() {
        console.log(`\nTeacher Details:\nId: ${this.#teacher.tId}`);
        super.showMyDetails();
        console.log(`Course name: ${this.#teacher.tCourseName}`)
    }

    changeTeachingCourse(newCourseName){
        if(newCourseName.toLowerCase() === this.#teacher.tCourseName.toLowerCase()){
            console.log('You are already teaching this course');
        }
        else if(this.#isCourseNameValid(newCourseName) && this.#teacher.tCourseName.length > 0){
            const courseData = this.#isCourseNameValid(newCourseName);
            this.#teacher.tCourseName = MyStringFunctions.toTitleCase(newCourseName);
        }
        else{
            console.log('Invalid Course Name');
        }
    }

    /**
     * addGrade
     * 
     * input: studentId, grade
     * 
     * if studentId is valid and studentGrade is ''
     *      update student.sGrade = grade (always store grade in Uppercase)
     *      print -> grade is successfully added to student id -> id
     * if studentGrade is NOT ''
     *      then print -> remove grade from the student
     * if studentId is invalid
     *      then print -> Invalid student id  
     * 
     */
    addGrade(studentId, studentGrade) {
        
    }

    /**
     * removeGrade
     * 
     * input: studentId
     * 
     * if studentId is valid and studentGrade is NOT ''
     *      update student.sGrade = ''
     *      print -> grade is successfully removed from student id -> id
     * if studentGrade is ''
     *      then print -> Student has no grade
     * if studentId is invalid
     *      then print -> Invalid student id
     * 
     */
    removeGrade() {
        // code
    }


}
module.exports = Teachers;