export default class CakeItem {
    constructor(name, imageUrl,price){
        this.name = name;
        this.imageUrl = imageUrl;
        this.price = price;
    }
    render(){
        return `
            <>
            <div class="bakery-item">
                <img src="${this.imageUrl}" alt = "${this.name}">
                <h3>${this.name}</h3>
                <p> Price:$${this.price.toFixed(2)}</p>
                <button class="add-to-cart" data-index="${CakeItem.indexCounter++}
            </div>
            </>
            `
    }

}
CakeItem.indexCounter =0;