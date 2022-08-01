const Student = require("./Student");

const obj = new Student();
obj.name = 'Roza';

console.log(obj.name);

obj.setSSN(2222222222);
console.log(obj.getSSN);


