const Human = require("./Human");
class Student extends Human{
    name = "James";
    //run-time polymorphism
    work(){
        super.work();
        console.log("Student mostly works part-time");
    }
}
module.exports = Student;