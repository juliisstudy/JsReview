class Cake{
    constructor(flavor){
        this. flavor = flavor;
    }
    showTitle(){
        console.log(`flavor is :${this.flavor}`)
    }
}
class ChocolateCake extends Cookie{
    #secretIngredient(){
        return 'chocolate';
    }
    showTitle(){
        super.showTitle();
        console.log(`${this.flavor} is amazing`);
        console.log(this.#secretIngredient());
    }
}

