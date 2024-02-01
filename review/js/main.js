console.log("hello world")
const myVariable = "Mathmatics";
myVariable.indexOf("Mat");
myVariable.slice(5,2)
console.log(myVariable.split("e"))

const myNumber = 42;
const myString ="32";
const myFloat= 42.0151;
Number(myString)
Number.parseFloat(myString).toFixed(2)
Number.parseInt(myFloat)

Math.PI
Math.trunc(Math.PI)
Math.round(3.4)
Math.ceil(3.4)//ceiling round the number up
Math.pow(2,10);

Math.min(2,0.5,9)
Math.random()

//from 1 to 10
Math.floor(Math.random()*10)+1;
const number = Math.floor(Math.random()*4);
const name = "juli"
console.log(name.charAt(number));

//anyName
const anyName = Math.floor(Math.random()*name.length);

//if statment
let testScore =90
let collegeStudent = true
let grade
if(testScore>=90){
    grade = "A"
}else if(testScore>=80){
    grade = "B"
}else if(testScore>=70){
    grade="C"
}else if(testScore>60){
    grade ="D"
}else{
    if(collegeStudent){
        grade="U"
    }
}

//switch

switch(expression){
    case choice1:
        break;
    case 3:
        break;
    default:
        console.log("no match")
}

// ternary Operator
let testScoreII = 78;
let myGrade = testScoreII >89 ?"A":"B"

let namePrompt = prompt("please enter your name")
namePrompt.trim()

let playGame = confirm("shall we play rock, paper or scissors?")
if(playGame){
    let playerchoice = prompt("please make choice")
    if(playerchoice){
        let playerOne =playerchoice.trim().toLowerCase();
        if(playerOne==="rock"||playerOne==="paper"||playerOne==="scissors"){
            let computerChoice = Math.floor(math.random()*3+1);
            let computer = computerChoice ===1?"rock":computerChoice===2?"paper":"scissors";
            let result = playerOne === computer
                ?"tie game"
                :playerOne ==="rock"&&computer==="paper"
                ?`playerOne:${playerOne}\nComputer:${computer}\nComputer wins!`
                :playerOne ==="paper"&&computer==="scissors"
                ?`playerOne:${playerOne}\nComputer:${computer}\nComputer wins!`
                :playerOne ==="scissors"&&computer==="rock"
                ?`playerOne:${playerOne}\nComputer:${computer}\nComputer wins!`;
            alert(result)
            let playAgain = confirm("play again")  
            playAgain?location.reload():alert("ok,thank you for playing") 
        }
    }else{
        alert("I guess you changed your mind. May be next time")
    }
}else{
    alert("OK,maybe next time")
}

//loop
let myNumberStart =0;
while(myNumberStart<50){
    myNumberStart +=2;
    console.log(myNumberStart)
}

do{
    console.log(myNumberStart)
}while (myNumberStart<50)

for(let i=0;i<=10;i++){
    console.log(i);
}

function getUserEmail(email){
    return email.slice(0,email.indexOf("@"));
}
const getUserName = (email)=>{
    return email.slice(0,email.indexOf("@"));
}
const toProperCase = (name)=>{
    return name.charAt(0).toUpperCase()
}
//var let and const

var x =1 
// will rewrite if you have 2 var some name
// use const is preference 
// use let if it will reassign the value

//global scope
var x =2
let y =2
const z =3

//local scope
{
    let y =4
    const x= 2
}

function myFun(){
    const z=5;
}

//array
const myArray =[]
myArray[0] = "juli"
myArray[1] =1001
myArray[2]=false;
const firstItem = myArray.shift();
//delet the first item in the array
myArray.splice(1,1);
myArray.splice(1,1,42); // add 42 at the position at 1
//splice(start, deleteCount, item1, item2)

const myArray =[1,2,3,4,5,6]
myArray.slice(2,5); //not include 5
myArray.reverse();
const newString = myArray.join(); //join the array items and become new string

newString.split(",")

const myArrayA=["A","B","C"];
const myArrayB = ["D","B","c"];

const newArray=myArrayB.concat(myArrayA);
// concat two array into a new array
const newArrayTwo = [...myArrayA,...myArrayB];
//spread opreater

//objects : key -value pairs in curly braces
const myObj = {name:"juli"}
console.log(myObj.name);

const anotherObj ={
    alive:true,
    answer:43,
    hobbies:["Eat","Sleep"],
    beverage:{
        morning:"coffee",
        afternoon:"ice tea"
    },
    action:function(){
        return `Time for ${this.beverage.morning}`
    }
}
const vehicle={
    wheels:4,
    engin:function(){
        return "vrrooom";
    }
}
const truck = Object.create(vehicle)
// constructor
truck.doors=2;
console.log(truck.wheels); //Inheritance

class Pizza {
    crust = "original"
    #sauce = "traditional"  //private variable, cannot get access to public
    constructor(pizzaType,size){
        this.type = pizzaType;
        this.size= size;
        this.crust =crust;
    
        this.topping =[];
    }
    bake(){
        console.log(`bake a ${this.size} ${this.crust} ${this.#sauce} crust pizza`)
    }
    getPizzaCrust(){
        return this.crust;
    }
    setPizzaCrust(pizzaCrust){
        this. crust = pizzaCrust;
    }
    getTopping(){
        return this.topping;
    }
    setToppings(topping){
        this.topping.push(topping)
    }
}

const myPizza = new Pizza()
myPizza.bake()
myPizza.setToppings("sausage")
myPizza.getPizzaCrust();

class SpecialtyPizza extends Pizza {
    constructor(pizzaSize){
        super(pizzaSize);
        this.type ="the works"

    }
    slice(){
        console.log(`Our ${this.type} ${this.pizza} pizza`)
    }

}

const mySpeacialty = new SpecialtyPizza("medium");
mySpeacialty.slice();

//Factory function
function pizzaFactory(pizzaSize){
    const crust = "original"
    const size = pizzaSize;
    return {
        bake:()=>{
            console.log(`baking a ${size} ${crust} pizza` )
        }
    }
}
const myPizzaTwo = pizzaFactory("small")
myPizzaTwo.bake()

//Json
const myObjOne = {
    name:"juli",
    hobbies:["study","reading"],
    hello: function(){
        console.log("hello")
    }
}

const sentJSON = JSON.stringify(myObjOne)

const receiveJSON = JSON.parse(sentJSON)

//catch error
const makeError =() =>{
    try{
        const name = "juli"
    }catch(error){
        console.error(err);
    }
}
makeError()

//DOM Document object model
const view1 = document.getElementById("view");
const view2 = document.querySelector("#view2")

view1.style.display ="flex"
const sameViews = document.querySelectorAll(".view")
const sameDives = view1.getElementsByTagName("div")

const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)");














