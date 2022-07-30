const Members = require("./Members");

class Teachers extends Members {

    static idValue = 0;

    teacher = {
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
    hiring(teacherName, teacherAge, teacherCountry, teacherCourseName) {
        // 
    }

    showMyDetails() {
        // code
    }

    changeTeachingCourse() {
        // code
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
    addGrade() {
        // code
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