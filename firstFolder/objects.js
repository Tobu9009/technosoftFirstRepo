/*object represented by {}

values are stored in key-value pair
key is also called as property or attribute 

syntax 
let objectName = {} //empty object
OR 
let objectName = newObject(); //empty Object 



let objectName = {
    key1:value1,
    key2:value2,
    key3:value3
}

keys have to be unique in an object, and datatype is always a String
keys can be digit, string(with/without) spaces 
when you print entire object or apply for-in loop on the object:
    keys which are digits are going to printed first and in sorted order 
    string keys are going to be printed as they are mentioned in the object 


*/
let name = 'Deepak'
let country = 'USA'
let age1 = 20;
let gender1 = 'M'
let paymentPlan1 = 'Paid in full'

human1 = {
    name : 'Happy',
    ssn : 2332,
    gender : 'male',
    qualification : 'Engineer',
    state : 'NY',
    childernNames : ['c1', 'c2', 'c3']
};

/**
 * human1 = {
 * name = 
 * ssn = 
 * gender = 
 * qualification = 
 * state = 
 * childrenNames = [human2, human3]
 * schools = {
 *          name = 
 *          address = 
 *          studiedUpto = 1-4
 *      }
 * };
 * 
 * 
 * let objectName = {
 *      attribute1 : attribute1Value,
 *      attribute2 : attribute2Value,
 *      attribute3 : attribute3Value,
 * };
 * 
 *
 */
let myObject = {
    myName : 'Happy Peace',
    age : 20,
    state : 'New York',
    pastJobs : {
        current : 'ABC',
        past1 : 'XYZ',
        past2 : 'DEF'
    },
    siblingsNames : ['Deepak', 'Heena', 'Gigi', 'Yuri']
};

//print name myObj - object 

console.log(`\nmyObj\n`);
console.log(myObject);

console.log(`\nPrinting value of name-attrivute in myObject\n`)
console.log(myObject.pastJobs.past2)
console.log(myObject.siblingsNames[0])

console.log(myObject.myName);
console.log(myObject['myName']);

console.log(myObject.pastJobs.past2);      //using dot operator
console.log(myObject['pastJobs']['past2']);    //using square-operator

console.log(myObject.siblingsNames[0]); // using dot operator;


let myObj = {
    myName : 'Happy peace',
    11: true,
    state : 'New York',
    5 : 'five',
    age : 20,
    true: 22
};

console.log(myObj);
/* to print out only the key(s) from an object, use for-in loop */
console.log('\nUsing for-in on myObj:\n')
for(let prop in myObj){
    console.log(prop)
    console.log(typeof prop);

    console.log(myObj[prop]);
    console.log(typeof myObj[prop]);
}

console.log(`\nUsing for-in on myObj print only myName-attribute`)
for(let prop in myObj){
    if(prop.localeCompare('myName') === 0){
        console.log(prop);
    }
}

console.log(`\nUsing for-in on myObj print only myName-attribute`)
let count = 0;
for(let prop in myObj){
    console.log(prop);
    count++;
    if(count === 1){
        break;
    }
}

/* to add key-values in the object*/

myObj.gender = 'M';
console.log(`\nprinting myObj\n`)
console.log(myObj);

myObj[2] = 'two';                   //adding a pair (where key is a digit)
myObj['Ssn number'] = 1111;         //adding a pair (where key is a spaced string)
myObj['isGraduated'] = 'true';

console.log(`\nprinting myObj\n`)
console.log(myObj);

console.log(myObj.isGraduated);     //printing value of isGraduated attributed
console.log(myObj['isGraduated'])   //printing value of isGraduated attributed

console.log(myObj['ssn number'])    //printing value of ssn number attributed

console.log(myObj[2]);              //printing value of 2 attributed
/*
if the key is a digit or a spaced-string, to access the corresponding value,
we have to use [];

 */

/*
to delete the attribute from the object 
operator - delete 

operator will delete the attribute (if exists) OR if the attribute doesn't exist in the object 
    returns true 

Note -> delete operator changes the original object 

*/

//delete 'isGraduated' attribute and its value
console.log('\nprinting deletes\n');
console.log(delete myObj.isGraduated); //returns true because isGraduated 

//delete 2 attribute and its value
let is2Deleted = delete myObj[2];
console.log(`isDeleted -> ${is2Deleted}`) //returns true 

console.log(`\nprinting myObj\n`);
console.log(myObj);

//delete 'ssn number' attribute and its value
//delete myObj['ssn number']

/* 
if attribute doesn't exist in the object, and you try to fetch its value
object returns 'undefined'
*/
console.log('\nprinting value of attrivbute which does not exist\n')
console.log(myObj.abcd)

/*
to verify if an attribute is present in the object or not
operator -> in  

if the mentioned attribute is exactly present
    operator results into true 
otherwise
    operator results into false
*/

const is_abcd_present = 'abcd' in myObj;
console.log(`\nis "abcd" present as on the attributes in myObj -> ${is_abcd_present}`);

const is_myName_present = 'myName' in myObj;
console.log(`\nis "myName" present as on the attributes in myObj -> ${is_myName_present}`);

const is_MyName_present = 'MyName' in myObj;
console.log(`\nis "MyName" present as on the attributes in myObj -> ${is_MyName_present}`);

/*spread operator 
is to clone or merge arrays or objects
*/

let planets = ['Earth', 'Mercury', 'Venus', 'Jupiter', 'Pluto'];
let fruits = ['mango', 'apple', 'banana', 'cherry'];
let states = ['ny', 'nj', 'ca', 'pa', 'tx']

let combinedArray1 = [...states, ...fruits];
console.log(`\ncombinedArray1 -> ${combinedArray1}\n`);
console.log(`total values in combinedArray1 -> ${combinedArray1.length}\n`);

//let combinedArray2 = all values of states array, 'Happy', 'live', all values of fruits array

let combinedArray2 =  [...states, 'Happy', 'Live', ...fruits]
console.log(`\ncombinedArray1 -> ${combinedArray2}\n`);
console.log(`total values in combinedArray1 -> ${combinedArray2.length}\n`);

let abc = [...states]; //all values in states-array will be in abc-array
console.log(`\nabc -> ${abc}\n`)
console.log(`Total values in abc -> ${abc.length}\n`)

console.log('\nprintng spread operator on object')

let myObj1 = {
    myName : 'Happy peace',
    11: true,
    state : 'New York',
    5 : 'five',
    age : 20,
    true: 22
};

let myObj2 = {
    ...myObj
}

let book = {
    title : 'Learn to smile',
    year : 2022, 
    author : 'YOu',
    myName : 'Book'
}

console.log('\nprinting myObj\n');
console.log(myObj);

console.log('\nprinting myObj2\n');
console.log(myObj2)

let myObj3 = {
    livein : 'CA',
    ...myObj2,
    isAbove18 : true,
    ...myObj,
    anyTicket : false
}
