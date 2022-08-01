class Human{
    //Attributes and behaviors
    static version = "iPn 13";
    name ;
    eyeColor;
    height;
    #ssn;
    setSSN(ssn){
        if(ssn.length === 10){
            this.#ssn = ssn;
        }
        console.log("'ssn' is modified");
    }
    getSSN(){
        console.log("'ssn' is used");
        return this.#ssn;
    }
    eat(){
        let food = "Salad";
        console.log("Human eat");
    };
    work(){
        console.log("Human works");
    };
    sleep(){
        console.log("Human sleeps");
    };
}
module.exports = Human;