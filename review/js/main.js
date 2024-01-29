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

