class FoodBuidler {
    addBread(){}
    addSauce(){}
    addToppings(){}
    addCheese() {}
    getResult(){}
} 
class SandwishBuilder extends FoodBuidler(){
    constructor(){
        super();
        this.sandwish ={};
    }
    addBread() {
        this.sandwish.bread ="bread";
        return this;
    }
    addSauce() {
        this.sandwish.sauce ="Mayo";
        return this;
    }
    addCheese() {
        this.sandwish.cheese ="american cheese";
        return this;
    }
    getResult(){
        return this.sandwish;
    }
}

class BugerBuilder extends FoodBuidler {
    constructor() {
        super();
        this.burger ={};
    }
    addBread() {
        this.burger.bread ="bun";
        return this;
    }
    addSauce() {
        this.burger.sauce ="Tomato";
        return this;
    }
    addCheese(){
        this.burger.cheese = "chedder";
        return this;
    }
    getResult(){
        return this.burger;
    }
}

class FoodDirector {
    constructor (){

    }
    setBuilder(builder){
        this.builder =builder;
    }
    construct() {
        this.builder.addBread().addSauce().addCheese();
        return this.builder.getResult();
    }
}

document.getElementById("createBurger").addEventListener("click",()=>{
    const burgerBuilder = new BugerBuilder();
    const foodDirector = new FoodDirector();
    foodDirector.setBuilder(burgerBuilder);
    const burger = foodDirector.construct();

    document.getElementById("result").innerHtml =`
    <h2>Burger</h2>
    <p>bread :${burger.bread}</p>
    <p> Sauce :${burger.sauce}</p>
    <p> Cheese:${burger.cheese}</p>
    `
})