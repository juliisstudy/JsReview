"use strict"; // this code works the modern way

//interact with users,alert,prompt,confirm
alert("hello");
let age = prompt('how old are you?',30);//title and default value
alert('You are ${age} years old');
let isHuman = confirm("Are you human?");
//shows a window with the a question and ok, cancel
alert(isHuman);

//Type conversions
let value = true;
alert(typeof value);

value = String(value);
alert(typeof value);

let str = "123";
let num = Number(str);

Boolean(1);
Boolean("hello");

//unary plus covert it into a number
alert(+true);

//if statments
let numOfClothes = prompt('How many clothes do you have?',100);
if (numOfClothes < 10){
    alert("too few");
}else if(numOfClothes> 150){
    alert("too many")
}else{
    alert("you have 100 clothes")
}

let accessAllowed;
if (age > 18){
    accessAllowed = true;
}else {
    accessAllowed = false;
}
alert(accessAllowed);

//shorter way
let accessAllowedII = age > 18 ? true : false;

//do-loop
// the loop will first execute the body and then check the condition and while it's truthy, execute again.
let i = 0;
do {
    alert (i);
    i++;
} while (i<3);

//breaking the loop
let sum = 0;
while (true) {
    let value = +prompt("Enter a number", '');
    if(!value) break;
    sum += value;
}
alert('Sum:' + sum);

//continue the next iteration
//it stops the current iteration and forces the loop to start a new one
for (let i = 0;i<10;i++){
    if(i % 2 == 0) continue;
    alert(i);
}

for (let i = 0;i<10;i++){
    if(i % 2){
        alert(i);
    }
}

//switch statement

let numTest = 50;
switch(numTest){
    case 10:
        alert('too small');
        break;
    case 100:
        alert('too big');
        break;
    default:
        alert("I donot know");
}

//function expression 
let sayHi = function(){
    alert("hello")
};

//arraw function
let sumArr = (a,b) => a + b;

//object 
let user = {
    name: "Juli",
    age: 30
}
for (let key in user) {
    alert(user[key]);
    alert(key);
}

//constructor 
function User(name) {
    this.name = name;
    this.isAdmin = false;
    this.sayHi = function() {
        alert("my name is:"+this.name);
    }
}

let userNew = new User("Juli");
userNew.sayHi();
alert(user.name);


let billion = 1_000_000_000;

//spread 
let arr = [3,5,6];
alert(Math.max(...arr));

//prototypal inheritance
let animal = {
    eats: true
};
let rabbit = {
    jumps:true
};
rabbit._proto_ = animal;
alert(rabbit.eats);



//array
let fruits = ["apple","orange","plum"];
for (let fruit of fruits){
    alert(fruit);
}

for (let key in arr){
    alert(arr[key]);
}

//insert text into html
function onClickButton (){
    document.getElementById("demo").innerHTML = "Hello";
}

//math
function doSomeMath(num1,num2){
    const PI = 3.14;
    let z = num1 + num2 + PI;
    document.getElementById("result").innerHTML = z;
}





// create an object
const person = {
    firstName: "Juli",
    lastName: "Li",
    fullName: function (){
        return this.firstName + " " + this.lastName;
    }
}
// read an const object
function showObject(){
    document.getElementById("personObject").innerHTML = person.fullName();
}

//string 
function getStringLength(){
    let text = "abc,def,ghi,def";
    let length = text.length;
    let part = text.slice(4,7);
    let partNeg = text.slice(-4);
    let partSub = text.substring(3,5);
    let partRep = text.replace("abc","123");
    text = text.replaceAll("def","456");
    let textUp = text.toUpperCase();

    let text1 = "hello";
    let text2 = "world";
    let text3 = text1.concat(" ",text2);

    let text4 = text3.trim();

    let char0= text.charAt(0);
    
    let textArray = text.split(",");

    document.getElementById("stringlen").innerHTML = 
    "string length:"+length+";String slice:"+ part+"; parameter Negative" + partNeg +
    "substring:" + partSub;

}

function stringSearch(){
    let text = "abcdefghijklmn";
    let indexOf = text.indexOf("def");
    let indexLast = text.lastIndexOf("jk");
    //The search() method searches a string for a string returns the position of the match
    text.search("abc");
    //The match() method returns an array containing the results of matching a string against a string or RE.
    text.match("abc");
    // The matchAll() methods returns and iterator containing the results of matching a string against a string or RE.
    const iterator = text.matchAll("abc");
    //The includes() method returns true if a string contains a specified value.
    text.includes("abc");

}

function colorArray(){
    const colors = ["red","orange","yellow"];
    const colorsArray = new Array("red","orange","yellow");
    let text = colorArray.toString();

    let colorsLen = colors.length;
    let textLoop = "<ul>";
    for (let i = 0;i < colorsLen;i++){
        textLoop += "<li>" + colors[i] + "</li>";
    }
    textLoop += "<ul>";
    
    document.getElementById("array").innerHTML=textLoop;

    // forEach()method calls a function once for each array
    let text2 = "<ul>";
    colors.forEach(arrayVal);
    text2 +="</ul>";

    //adding array elements
    colors.push("black");
    colors[colors.length]="white";

    //join() method join all array elemets into a string, it can specify the separator.
    let colorString = colors.join("*");

    //the pop() methods removes the last elements from an array;
    colors.pop();
    
    //the shift() method removes the first array element and shifts all 
    //other elements to the lower index
    let colorShift = colors.shift();

    //the unshift() method adds a new element to an array(at the beginning), 
    //and unshift older elements
    colorShift.unshift("purple");

    //The concat()method creates a new array by merging existing arrays
    let colorNew = colors.concat(colorArray);

    //the splice() method can be used to add new items to an array
    // the first para define the position where new elements should be added
    // the second para define how many elements should be removed.
    colors.splice(2,0,"green","brown");

    //the slice()method slices out a piece of an array into a new array
    let colorSlice = colors.slice(3);
    let colorSlice2 = colors.slice(2,5);
    //selects elements from the start argument, and up to the end argument

    colors.sort();
    colors.reverse();
}

//forEach function to read each element.
function arrayVal(value) {
    text += "<li>" + value +"</li>";
}


//Array Iteration
let text = "";
const numbers = [1,2,3,4,5,6];

function arrayIteration(){
    numbers.forEach(readValue); //calls a function once for each array
    document.getElementById("arrayIteration").innerHTML = text;
}

function readValue(value){
    text += value + "<br>";
}

//map() creates a new array by performing a function on each array elements
function mapTest(){
    const num2 = numbers.map(addTwo);
    document.getElementById("mapTest").innerHTML = num2;
}
function addTwo(value){
    return value+2;
}

//Array flatMap() method first maps all elemts of an array and then creates
//a new array by flattening the array

const newArray = numbers.flatMap((x) => x*2);

// filter() method creates a new array with array elements that pass a test.

function filterFuc(){
    const over4 = numbers.filter(filterTest);
}

function filterTest(){
    return value > 4;
}

// reduce() methods runs a function on each array elements to produce a single value
function reduceTest(){
    let sum = numbers.reduce(sumOfarray);
}
function sumOfarray(total, value){
    return total + value;
}

// every() method checks if all array values pass a test
function everyTest(){
    let allOver3 = numbers.every(greater);
}
function greater(value){
    return value > 3;
}

