const Members = require("./Members.js")
const MyStringFunctions = require("./MyStringFunctions");

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
    ]


class Students extends Members {

    static idValue = 0;
    student = {
        sId : 0,
        sGrade : '',
        sCourseDetails : {
            courseName : '',
            coursePrice : 0,
            courseLength : 0,
        },
        sBalance : 0
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
    enrollment(studentName, studentAge, studentCountry, studentCourse) {
        const msf = new MyStringFunctions();
        // if (age < 16) {
        //     console.log('Student has to be of 16 or above');
        // } else if ()
        if (studentAge >= 16 && this.isCourseNameValid(studentCourse) && studentCountry.toLowerCase().localeCompare('usa') === 0 ) {
            const courseData = this.isCourseNameValid(studentCourse);
            //this.student.sName = msf.toTitleCase(studentName);
            this.member.mName = MyStringFunctions.toTitleCase(studentName); //using static helper function
            this.member.mAge = studentAge;
            this.member.mLocation = studentCountry;
            this.student.sCourseDetails.courseName = courseData.courseName;
            this.student.sCourseDetails.coursePrice = courseData.price;
            this.student.sCourseDetails.courseLength = courseData.length;
            this.student.sBalance = courseData.price;
            this.student.sId = ++Students.idValue;
            console.log(`\nThank you for enrolling.\nYour ID value is ${this.student.sId}\n`)
        } else {
            console.log("\nDO NOT ENROLL");
        }
    }


    showMyDetails() {
        console.log(`\nStudent Details:\nId:${this.student.sId}`)
        super.showMyDetails();
        console.log(`Course Name: ${this.student.sCourseDetails.courseName}\nBalance: $${this.student.sBalance}`);
    }

    /**
     * we want course-object which has name as checkForCourse
     */
    isCourseNameValid(checkForCourse) {
        return courseDetails.find(course => course.courseName.toLowerCase().localeCompare(checkForCourse.toLowerCase()) === 0);
    }

    static messageFromClass2022(msg) {
        console.log(`\nMessage to institute from the Class of 2022:\n${msg}\n`);
    }

    /**
    * we want course-object which has name as checkForCourse
    */
    // isCourseNameValid(checkForCourse) {
    //     let matchedCourseObject;
    //     for (const courseOject of courseDetails) {
    //         if (courseOject.courseName.toLowerCase().localeCompare(checkForCourse.toLowerCase()) === 0) {
    //             matchedCourseObject = courseOject;
    //             break;
    //         }
    //     }
    //     return matchedCourseObject;
    // }

    /*
        Array of course-objects
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
        ]

        pick an course-object from array
        if (course-object.courseName === checkForCourse)
            return course-object

        arrayName[0].courseName === checkForCourse
            return arrayName[0]

        arrayName[1].courseName === checkForCourse
            return arrayName[1]

    */

    /*
    changeCourse 
    input: newCourseName 
    if courseName is valid AND student is not already enrolled in the course
        then change the course name
        update the course-length as per the new course-length 
        update the course-price as per the new course-price
        update the student-balance as per the new course-price
    if newCourseName is invalid
        then print msg->Invalid course name
    If student is already enrolled in the course
        then print-> You are arlreayd enrolled in the course
    

    */
    /*
    Make payment
    input: amount 
    if amount is > 0 and less or equal to balance 
        print -> Thank you for making payment of $amount 
        and update the student balance
        print -> If balance is zero, print -> No more payment required
            else -> Updated balance is $balance 
        if amount is invalid
            print -> Invalid amount. Your balance is $balance

    */

}
module.exports = Students;