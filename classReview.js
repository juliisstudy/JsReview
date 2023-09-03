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
