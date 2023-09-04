class Car { //parent class
    constructor(name) {
        this.brand = name;
    }
    present(){
        return "I have a "+ this.brand;
    }
}

class Model extends Car {
    constructor(name,mod) {
        super(name);
        this.model = mod;
    }
    show() {
        return this.present() + ", it is a " + this.model;
    }
}
const mycar = new Model("Ford", "M");
mycar.show();

//arrow function
hello = () => {
    return "Hello world";
}
hello = () => "hello world";
hello = (val) => "hello" + val;
hello = val => "hello" + val;

//array
const myArray = ['apple','banana','orange'];
const myList = myArray.map((item)=><p>{item}</p>);

//destructuring 
function calculate(a,b){
    const add = a + b;
    const subtract = a - b;
    const multiply = a * b;
    const divide = a / b;
    return [add, subtract,multiply,divide];
}
const [add,subtract,multiply,divide] = calculate(3,4);

//destructuring objects
const vehicleOne = {
    brand:'Ford',
    model:'M',
    type:'car'
}
myVehicle(vehicleOne);
function myVehicle({type,model,brand}){
    const message = 'My' +type +'is a '+model+',and brand is'+brand;
}

// Spread Operator ... allows us to quickly copy all or part of existing array 
//to a new array.
const numbersOne = [1,2,3];
const numbersTwo = [4,5,6];
const numbersCombined = [...numbersOne, ...numbersTwo];


