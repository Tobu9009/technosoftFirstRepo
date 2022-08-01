const Human = require("./Human");

class Student extends Human{

    name = "James";
    //The below work function also exsists in human but this one overwrites it if 
    work(){
        super.work(); //getting work function from parent class human
        console.log("Student mostly works part-time")
    }

}
module.exports = Student;