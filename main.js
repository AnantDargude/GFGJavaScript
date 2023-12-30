/* Learning JS from GFG 22-dec-2023 */

//JavaScript Console
console.groupCollapsed("Console");
var hw = "Hello World";
var style = "background-color:green; padding:5px; border:1px solid red; color:white;";
console.log(`%c ${hw}`, style);
console.warn(hw);
console.error(hw);
console.groupEnd("Console");

//JavaScript Syntax
console.groupCollapsed("Syntax");
var globalVarvar = "Hi I am a Global var String";
let globalVarlet = "Hi I am a Global let String";
console.log(window.globalVarvar);
console.log(globalVarvar);
//if variable is outside the fun or block but not var then it will not belong to window object
console.log(window.globalVarlet);   
console.log(globalVarlet);

// Declare a variable and initialize it
// Global variable declaration
let Name = "Apple";
let num = 30;
console.log(num);
// Function definition
function MyFunction() {
 
    // Local variable declaration
    let num = 45;
 
    // Display the value of Global variable
    console.log(Name);
 
    // Display the value of local variable
    console.log(num);
}
// Function call
MyFunction();
console.groupEnd("Syntax");

console.groupCollapsed("Data Types");
let num11 = 2; // Integer 
let num2 = 1.3; // Floating point number
let num3 = Infinity; // Infinity
let num4 = 'something here too'/2; // NaN

let str = "Hello There";
var hw = "Check";
console.log("This is a duplicate var hw ",hw);  // undefined
let str2 = 'Single quotes works fine';
let phrase = `can embed ${str}`;
console.log(phrase);
let x;
console.log(x);  // undefined
console.groupEnd("Data Types");

console.groupCollapsed("Try Catch in JS");

let marks = 58;
let marksResult = "FAILED"

switch(marks>40){
    case marks > 70:
        marksResult = "DISTINCTION";
        break;
    case marks > 60:
        marksResult = "FIRST CLASS";
        break;
    case marks > 50:
        marksResult = "SECOND CLASS";
        break;
    default:
        marksResult = "PASSED";
        break;

}
console.warn("You Got--->> " , marksResult);

function withdrawCash(bankBalance,withdrawAmt){
    this.bankBalance = bankBalance;
    this.withdrawAmt = withdrawAmt;

    console.log("bankBalance",bankBalance);
    console.log("withdrawAmt",withdrawAmt);
    try {

        if((bankBalance-withdrawAmt) < 500){
            throw new Error(`Minimum Balance of 500 should be maintain in Bank Account, \nPlease try amount Less than ${(bankBalance-500)}`);        
        }else{
            console.log(`${withdrawAmt} Rs Debited from Account`)
            bankBalance -= withdrawAmt;
        }

    }catch (e) {
        console.log(e);
    }finally{
        console.log(`Your Bank Balance is ${bankBalance} \nThank you! Visit Again...`)
    }
}
withdrawCash(1200,800);

console.groupEnd("Try Catch in JS");


console.groupCollapsed("Loop");
let Platform = { fname: "geeks", Mname: "for", lname: "geeks", };
let strFor = "";
for(let x in Platform){
    console.log("for/in loop gives us Properties- ",x);
    strFor += Platform[x] + " ";
}
console.log(strFor);

let Platform2 = [ "geeks", "for", "geeks" ];
for(let x of Platform2){
    console.log("for/of loop gives us value- ",x);
}

// Iterating over argument objects
function Geeks() {
    for (let value of arguments) {
        console.log(value);
    }
}
// Iterating over all arguments passed
// through the function
Geeks("Geeks", "for", "Geeks");

// Map is an object that takes key-value pair as input
let mapObject = new Map([
    ["Geeks", 1],
    ["For", 2],
    ["geeks", 3],
]);




console.log("Display of Key-Value Pair->")
for (const entry of mapObject) {
    console.log(entry);
}
 
console.log("Display of Value only->")
for (const [key, value] of mapObject) {
    console.log(value);
}

console.groupEnd("Loop");

console.groupCollapsed("Expression and Operators");
let yoo = 5;
// Expected output 0
console.log('Saquare of 5 is - ',yoo = yoo**2);
console.groupEnd("Expression and Operators");


console.groupCollapsed("Objects");

let date = new Date();
console.log(date);

// Literal Object
let person = {
    fname:"Anant",
    lname:"Dargude",
    fullname: function(){
        return this.fname+" "+this.lname;
    },
    contactDetails:{
        addr:"India",
        tel:"222-333-4444"
    }
}
console.log(person.fullname());
console.log(person.contactDetails.addr);

//Object using Constructor
let person2 = function(fname,lname){
    this.fname = fname;
    this.lname = lname;
    // function fullname(){
    //     return this.fname+" "+this.lname;
    // }
}
person2.prototype.fullname = function() {
    return this.fname + " " + this.lname;
}

let per1 = new person2("Anant","Dargude");
let per2 = new person2("Pranita","Dargude");

console.log(per1.fullname());
console.log(per2.fullname());


let map1 = new Map([
    ["first name", "Anant"],
    ["last name", "Dargude"]
]);
 
// map1.set("first name", "Anant");
// map1.set("last name", "Dargude");
map1.set("website", "geeksforgeeks")
    .set("friend 1","gourav")
    .set("friend 2","sourav");
 
console.log(map1);     
console.log("map1 has website ? "+ map1.has("website")); 
console.log("map1 has friend 3 ? " + map1.has("friend 3")); 
console.log("get value for key website "+ map1.get("website")); 
console.log("get value for key friend 3 "+ map1.get("friend 3"));
console.log("delete element with key website " + map1.delete("website"));     
console.log("map1 has website ? "+ map1.has("website")); 
console.log("delete element with key website " + map1.delete("friend 3")); 
map1.clear(); 
console.log(map1);

// let promise = new Promise(function(resolve,reject){
//     if(3>2){
//         resolve("I am a resolve from Promise");
//     }else{
//         reject("I am a reject from Promise");
//     }
// });

// promise.then(
//     function(suc){
//         console.log(suc);
//     }
// ).catch(
//     function(rej){
//         console.log(rej);
//     }
// );
console.groupEnd("Objects");


console.groupCollapsed("Function");

const funcRes = function(a,b){return a+b;}
console.log(funcRes(10,20));

(function(){
    return console.log("10*20- ",10*20);
})();

const arrowFunc = () => { console.log("I am a Arrow Function")}
arrowFunc();

//object geeks1 
let geeks1 = { 
    name: "ABC", 
    article: "C++"
} 
//object geeks2 
let geeks2 = { 
    name: "CDE", 
    article: "JAVA"
} 
//object geeks3 
let geeks3 = { 
    name: "IJK", 
    article: "C#"
} 
  
function printVal() { 
    console.log(this.name + " contributes about " + this.article + "<br>"); 
} 
  
let printFunc2 = printVal.bind(geeks1); 
//using bind() 
// bind() takes the object "geeks1" as parameter// 
printFunc2(); 
  
let printFunc3 = printVal.bind(geeks2); 
printFunc3(); 
  
let printFunc4 = printVal.bind(geeks3); 
printFunc4(); 
//uniquely defines each objects

//Microtask
Promise.resolve("resolve-------- This is a resolved value").then(console.log);
setTimeout(console.log, 0, "setTimeout-------- This is a value after the timeout");

//Promise
let myPromise = new Promise(function(success,failed){
    let randomNum = Math.random();
    if(randomNum > 0.5 ){
        success("> 0.5 myPromise Promise Successful");
    }else{
        failed("< 0.5 myPromise Promise Failed");
    }    
});

myPromise.then(
    function(success){
        console.log("resolve-------- First .then() - ",success);
        return success;
    }
    //we can also prvide second para for failure
    // ,function(failed){
    //     console.log(".then() second para - ",failed);
    // }
).then(
    function(success){
        console.log("resolve-------- Second .then() - ", success);
        return success;
    }
).then(
    function(success){
        console.log("resolve-------- Third .then() - ", success);
        return success;
    }
).catch(
    function(failed){
        console.log("reject-------- .then() will NOT execute in failure - ",failed);
    }
)

//Async & Await

// var timerPromise = function(){
//     let wait5Sec = new Promise(function(resolve,reject){        
//         setTimeout(function(){
//             console.log("timerPromise() - 5 Seconds Timer Completed.");
//             resolve("timerPromise() - Resolved");
//         },5000)        
//     });
//     return wait5Sec;
// }

const timerPromise = new Promise(function(resolve,reject){        
    setTimeout(function(){
        console.log("setTimeout-------- timerPromise() - 5 Seconds Timer Completed.");
        resolve("resolve-------- timerPromise() - Resolved");
    },5000)        
});

const timerPromise2 = new Promise(function(resolve,reject){        
    setTimeout(function(){
        console.log("setTimeout-------- timerPromise2() - 7 Seconds Timer Completed.");
        resolve("resolve-------- timerPromise2() - Resolved");
    },7000)        
});

async function asyncFunc(){

    console.log('Async Started-------- I am Async Function that awaits for timerPromise() & timerPromise2()');
    const data = await timerPromise;
    const data2 = await timerPromise2;   
    
    console.log(data);
    console.log(data2);

    console.log('Async Ended-------- I am Async Function that awaits for timerPromise() & timerPromise2()'); 
}
asyncFunc();
console.groupEnd("Function");


console.groupCollapsed("OOP");

function onclickEvent(){
    alert("Onclick event is called");
}

//const Website = class Geek{ 
const Website = class { 
    constructor(name) { 
        this.name = name; 
    } 
    returnName() { 
        return "My Name is - "+this.name; 
    } 
}; 

let firstObj = new Website("GeeksForGeek");
console.log(firstObj.returnName());
console.log(firstObj["name"]);

class GeeksforGeeks { 

    // static keyword is used  
    // before the function name 
    static example1() {
        // return the string --> 
        // static method 1 
        return "static method 1" 
    }
    // Another static method  
    // with different name  
    static example2() {
        // return the string --> 
        // static method 2 
        return "static method 2" 
    }
}
// Calls the static function using 
// className.functionName 
console.log(GeeksforGeeks.example1()); 
console.log(GeeksforGeeks.example2());  



// function constructor 
function Person(name, job, yearOfBirth){    
    this.name= name; 
    this.job= job; 
    this.yearOfBirth= yearOfBirth; 
} 
// this will show Person's prototype property. 
console.log(Person); 
console.log(Person.prototype);

//Adding calculateAge to Person prototype
Person.prototype.calculateAge= function(){ 
    console.log('The current age is: '+(2023- this.yearOfBirth)); 
} 
console.log(Person.prototype);

// creating Object Person1 
let Person1= new Person('Jenni', 'clerk', 1986);  
console.log(Person1) 
let Person2= new Person('Madhu', 'Developer', 1995); 
console.log(Person2) 
  
Person1.calculateAge(); 
Person2.calculateAge(); 

// Abstraction example
function personOOP(fname, lname) {
    let firstname = fname;
    let lastname = lname;
 
    let getDetails_noaccess = function () {
        return (`First name is: ${firstname} Last 
            name is: ${lastname}`);
    }
 
    this.getDetails_access = function () {
        return (`First name is: ${firstname}, Last 
            name is: ${lastname}`);
    }
}
let person1 = new personOOP('Mukul', 'Latiyan');
console.log("NO Access- ", person1.firstname);
console.log("NO Access- ", person1.getDetails_noaccess);
console.log(person1.getDetails_access());

// Inheritance example
class person3 {
    constructor(name) {
        this.name = name;
    }
    // method to return the string
    toString() {
        return (`Name of person: ${this.name}`);
    }
}
class student extends person3 {
    constructor(name, id) {
        // super keyword for calling the above 
        // class constructor
        super(name);
        this.id = id;
    }
    toString() {
        return (`${super.toString()},
        Student ID: ${this.id}`);
    }
}
let student1 = new student('Mukul', 22);
console.log("Inheritance example - ",student1.toString());

//Polymorphism 
class A {
    area(x, y) {
        console.log("Polymorphism  example - ")
        console.log(x * y);
    }
}
class B extends A {
    area(a, b) {
        super.area(a, b);
        console.log('Class B')
    }
}
let ob = new B();
let output = ob.area(100, 200);

console.groupEnd("OOP");

console.groupCollapsed("Iterator & Generator");

//Stack overflow error occurs in edge after 9669 calls
var callnum = 1;
function display() {
    callnum += 1;
    console.log("Calling display - " ,callnum );
    display();
}
// display();

//check Length of array without length prop
let checkLen = [10,70,30,50,40,60,20];
let i=0
while(checkLen[i] != null){
    i++;
}
console.log("Length of array is - ", i);


//Iterator 
const arrayVar = ['a', 'b', 'c'];
//one way to iterate over iterables is for of it gives us 
//Iterator(which is val here) and arrayVar is Iterable.
for(let val of arrayVar){
    console.log("For of val is - ",val);
}
//Other way is usning arrayVar[Symbol.iterator]() i.e Iterator
let it = arrayVar[Symbol.iterator]();
console.log("Iterator - ",it.next().value);
console.log("Iterator - ",it.next().value);
console.log("Iterator - ",it.next().value);
console.log("Iterator - ",it.next().value);


//Generator
function* generatorFunc(){
    let num = 0;
    while(num<100){
        yield num+=10;
    }    
}
let gen = generatorFunc();
for(let val of gen){
    console.log("Generator function val by for-of Loop - ",val);
}
console.log("Generator - ",gen.next());
console.groupEnd("Iterator & Generator");


console.groupCollapsed("RegExp");
//find geek not followed by 128
function geek() {
    let str1 = "Geeks for Geeks123 Geeks@";
    let regex4 = /Geeks(?!123)/g;
    let match4 = str1.match(regex4);
 
    console.log("Found " + match4.length
        + " matches: " + match4);
}
geek();

function geek2() {
    let str1 = "GeeksforGeeeeks@_123_$";
    let regex4 = /[a-g]{3,4}/gi;
    let match4 = str1.match(regex4);
 
    console.log("Found " + match4.length + " matches: " + match4);
}
geek2();

console.groupEnd("RegExp");


console.groupCollapsed("Miscellaneous");
//This Keyword
let myObj = {
    name:"Anant Dargude",
    age:28,
    greet:function(){
        return this.age;
    }
}
console.log("Implicit Binding - ", myObj.greet());

// var age = 22;
const age = 22;
function verifyAge (){
    console.log("Default Binding, this in global(window) - ", this);
    return this.age;
}

console.log("Default Binding - ",verifyAge());
console.log("Default Binding, this in global(window) - ", this);
console.log("this.age - ", this.age);
console.log("window.age - ", window.age);
console.log("window[\"age\"] - ", window["age"]);
console.log("age - ", age);

const person4 = {
    name: "ram",
    age: 22,
    greet : () =>{
        return `Hello , you are ${this.age} years old`
    }
}
console.log(person4.greet());

const car = {
    brand: 'Maruti',
};
// As of now, 'this' keyword refers
// to 'window' object.
const printDetail = function (model, topSpeed) {
    console.log(`${this.brand} - ${model} has a top speed of ${topSpeed} KMPH`);
};

// Calling the function without using bind which
// means 'this' still refers to 'window' object
// so accessing this.brand will give undefined
printDetail('Swift', 200);

// Creating a new function based on printDetail
// with 'this' keyword referring to car object
// so accessing this.brand will give 'Maruti'
const lamboPrintDetail = printDetail.bind(car);
lamboPrintDetail('Breeza', 250);

// Creating another function based on printDetail
// with it's arguments pre-configured and 'this'
// keyword referring to car object
const reventonPrintDetail = printDetail.bind(car, 'Fronx', 300);

// Since the arguments are preconfigured so we don't
// need to pass any argument to call this function
reventonPrintDetail();

const obj1 = { 
    firstName: "First_name", 
    lastName: "Last_name"
}; 
const obj2 = { 
    firstName: "Sachin", 
    lastName: "Tendulkar"
}; 
function printNameCall() { 
    console.log("printNameCall() - "+ this.firstName + " " + this.lastName); 
}
function printNameApply() { 
    console.log("printNameApply() - "+ this.firstName + " " + this.lastName); 
}
printNameCall.call(obj1);
printNameCall.call(obj2);
printNameApply.apply(obj1);
printNameApply.apply(obj2);

printNameCall.bind(obj2);       //will not print

let myObj2 = {
    name:"I am not dargude",
    age:120,
    greet:function(){
        return this.age + " " + this.name;
    }
}
console.log(myObj2.greet());
const callBind = myObj.greet.bind(myObj2);
console.log(callBind());

//Local Storage in Browser
var ourStorage = window.localStorage;
console.log("ourStorage - ",ourStorage);

//Add
localStorage.setItem("name", "Anant");
localStorage.setItem("age", 28);

//Update
localStorage.setItem("name", "Anant Dargude");

//Read
console.log("localStorage.getItem(\"name\") - ",localStorage.getItem("name"));

//Remove
// localStorage.removeItem("age");

//Length
console.log("localStorage.length - ",localStorage.length);
//Delete
// localStorage.clear();

//typeof operator
console.log("typeof Infinity === 'number' - ", typeof Infinity === 'number');
console.log("typeof NaN === 'number' - ", typeof NaN === 'number');
console.log("typeof undefined === 'undefined' - ", typeof undefined === 'undefined');
console.log("typeof Symbol.iterator === 'symbol' - ", typeof Symbol.iterator === 'symbol');

//debugger is the keyword we can use to stop code execution to see the code error
//debugger;

//CallBack
function mainFunction(callbackfunc) {
    console.log("Performing operation...");
    // Use setTimeout to simulate an asynchronous operation
    setTimeout(function() {
      callbackfunc("Operation complete");
    }, 1000);
}
   
// Define the callback function
function callbackFunction(result) {
    console.log("Result: " + result);
}

// Call the main function with the callback function
mainFunction(callbackFunction);

let globalLet = "This is a global variable";
 
function fun() {
  let globalLet = "This is a local variable";
  console.log(window.globalLet); // This is a global variable
}
fun();

function fun2(){
    if(true){
        let im = 100;
    }
    console.log(im); // i is not defined
}
// fun2();

// Void and IIFE (Immediately Invoked Function Expression)
void function iife() { 
    console.log("IIFE is made with void operator"); 
}();

console.groupEnd("Miscellaneous");


// console.group("Microtask and Macrotask");
console.groupCollapsed("Microtask(job queue) and Macrotask(task/callback queue)");
//V8 Event Loop will call Sync function first followed by 
//Microtask- Promise etc followed by 
//Macrotask- setTimeout/HTTP/AJAX