const Students = require('./Students');


const s1 = new Students('jOHn', 20, 'USA', 'mobile');
/*
    idValue = 0
    student = {
        sName : '',
        sAge : 0,
        sCountry : '',
        sId : 0,
        sGrade : '',
        sCourseDetails : {
            courseName : '',
            coursePrice : 0,
            courseLength : 0,
        },
        sBalance : 0
    }
*/

// s1.enrollment('jOHn', 20, 'USA', 'mobile');
/*
        idValue = 1
        student = {
        sName : 'john',
        sAge : 20,
        sCountry : 'USA',
        sId : 0,
        sGrade : '',
        sCourseDetails : {
            courseName : 'Mobile',
            coursePrice : 0,
            courseLength : 0,
        },
        sBalance : 0
    }
*/

s1.showMyDetails();


const s2 = new Students('Gigi', 20, 'USA', 'QA');
/*
    idValue = 0;
    student = {
        sName : '',
        sAge : 0,
        sCountry : '',
        sId : 0,
        sGrade : '',
        sCourseDetails : {
            courseName : '',
            coursePrice : 0,
            courseLength : 0,
        },
        sBalance : 0
    }
*/

// s2.enrollment('Gigi', 20, 'USA', 'QA');


s2.showMyDetails();


const s3 = new Students('kiAN', 21, 'uSa', 'moBiLE');

s3.showMyDetails();