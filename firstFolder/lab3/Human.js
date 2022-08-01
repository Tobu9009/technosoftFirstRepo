class Human{
    //Attributes and behaviors

    //attributes
    name;
    eyeColor;
    height;
    #ssn 
    //setter
    setSSN(ssn){
        if(ssn.length === 10){ 
            this.#ssn = ssn;
        }
        console.lo
        
        console.log('Ssn is modified');
    }
    //getter
    getSSN(){
        return this.#ssn
    }
    //behaviors 
    eat(){
        console.log('Human eat');
    };
    work(){
        console.log('Human works')
    };
    sleep(){
        console.log('Human sleeps');
    };


}
module.exports = Human;