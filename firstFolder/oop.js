/*
OOP concept (object oriented programming)


1. Encapsulation 
    Wrapping up code in single unit(i.e. Class)
    To implement encapsulation concept, we create class and write code in it

2. Abstraction 
    To hide unnecessary information from user 
    To implement abstraction, we create methods

3. Inheritance
    toImplement Inheritance, we need to jave parent-child relationship between 2 classes
    we use "extends" keyword with childClass, in order to create parent-child relation between two classes
    childClass get access to parentClass/grandParentClass variables and functions 
    a class can extend ONLY one class (why? Diamond Problem)

4. Polymorphism 
    more than 1 form 
    In general: 
    1. Compile time polymorphism (static binding, method overloading)
        In a class, if we have two or more methods with same name but different input parameters, javascript doesn't allow this.
        Ways to set different input-parameters:
        a) different number of input-parameters
        b) different sequence of input-parameters
        c) different sequence of input-parameters 

    2. Run time polymorphism (dynamic binding, method overriding)
        This can exist only in inheritance set up 
        when we have a method in ChildClass with 
            same name and same input-parameters as of in parentClass
        when we want to overwrite/override a parentClass-function with childClass

    *****
    super keyword 
    we use 'super' keyword when we want to call/execute parentClass-function incide childClass-function
*/