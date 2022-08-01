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
        }];

    // New variable to store members of the school
    schoolMembers = {
        students: [],
        teachers: []
    }

class Members {

    member = {
        name: '',
        age: 0,
        location: ''
    }

    showMyDetails() {
        console.log(`Name: ${this.member.name}\nAge: ${this.member.age}\nLocation: ${this.member.location}`);
        // console.log(this.member);
    }

    // Get students - returns the list of students from school members obj
    getStudents() {
        return schoolMembers.students;
    }
    // Set students - sets the list of students from the school memmbers obj
    setStudents(students) {
        /*for (var student of students) {
            console.log(student.member.name);
        }*/
        schoolMembers.students = students;
    }

    // Get teachers - returns the list of teachers from school members obj
    getTeachers() {
        return schoolMembers.teachers;
    }
    // Set teachers - sets the list of teachers from the school memmbers obj
    setTeachers(teachers) {
        //console.log('members.setTeachers recieving: ' + teachers.length);
        /*for (var teacher of teachers) {
            console.log(teacher.member.name);
        }*/
        schoolMembers.teachers = teachers;
    }

    // Get course details - returns the list of courses w/ details
    getCourseDetails() {
        return courseDetails;
    }

    // Moved to members class as it is used in both Students & Teachers
    isCourseNameValid(checkForCourse) {
        return courseDetails.find(course => course.courseName.toLowerCase().localeCompare(checkForCourse.toLowerCase()) === 0);
    }

    // Requirement -> Teachers & Students location === 'usa'
    // input: member's location
    // returns true/false
    isCountryValid(memberLocation) {
        return (this.member.location.toLowerCase().localeCompare('usa') === 0);
    }

}
module.exports = Members;