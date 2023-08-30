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

