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
        if(teacherAge >= 21 && this.#isCourseNameValid(teacherCourseName)&& teacherCountry.toLowerCase().localeCompare('usa') === 0){
            const courseData = this.#isCourseNameValid(teacherCourseName);
            this.member.name = MyStringFunctions.toTitleCase(teacherName)
            this.member.age = teacherAge;
            this.member.location = teacherCountry;
            this.#teacher.tId = ++Teachers.#idValue;
            this.#teacher.tCourseName = courseData.courseName;
            let teachers = this.getTeachers();
            teachers.push(this);
            this.setTeachers(teachers);
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
    addGrade(studentId, grade) {
        // get the list of students
        let students = this.getStudents();
        let msg = 'Invalid student id'; // Defaulting message
        // checking if there are any students
        if(students.length > 0) {
        // check if student id is valid -> is the student id in the list? else, print msg.
            for(var student of students) {
                if(student.getSId()===studentId) {
                    msg = 'remove grade from the student'; //defaulting the message
                    // If the student grade is an empty string, set the grade & return success message
                    if(student.getGrade()==='') {
                        student.setGrade(grade);
                        console.log('Student recieved a grade of ' + grade + ', grade set to ' + student.getGrade())
                        msg = 'grade is successfully added to ' + studentId;
                    }
                    break; // stop looping we are done here (works on assumption there are no duplicate student ids)
                }
            }
        }
        console.log(msg);
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
    removeGrade(studentId) {
        let students = this.getStudents();
        let msg = 'Invalid student id'; // Defaulting message
        // checking if there are any students
        //console.log('remove grade, students length: ' + students.length);
        if(students.length > 0) {
        // check if student id is valid -> is the student id in the list? else, print msg.
            for(var student of students) {
                console.log('Id of student that is getting their grade removed: ' + student.getSId());
                if(student.getSId() === studentId) {
                    // If the student grade is an empty string, set the grade & return success message
                    student.setGrade('');
                    msg = 'Grade removed'; //defaulting the message
                    break; // stop looping we are done here (works on assumption there are no duplicate student ids)
                }
            }
        }
        console.log(msg);
    }


}
module.exports = Teachers;