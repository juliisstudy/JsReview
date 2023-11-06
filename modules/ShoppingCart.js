export default class ShoppingCart{
    constructor(){
        this.items =[];
    }
    addItem(item){
        this.items.push(item);
        this.updateCartDisplay();
    }
    removeItem(index){
        this.items.splice(index,1);
        this.updateCartDisplay
    }
    updateCartDisplay(){
        const summery = this.items.reduce((acc,item)=>{
            acc[item.name] = (acc[item.name]||0) +1;
            return acc;
        },{});
        let cartContent =`Items:${this.items.length}`;
        cartContent += Object.entries(summary).map(([name, count]) => `${name}: ${count}`).join(', ');

        let shopCart = document.getElementById('shopping-cart');
        shopCart.innerHTML = cartContent;
    }
    render(){
        this.updateCartDisplay();
    }
}