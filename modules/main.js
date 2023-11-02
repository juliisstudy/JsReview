
const Items =[
    new CakeItem('Donut','image/src',2.00),
    new CakeItem('Cupcake','image/src',1.00),
    new CakeItem('cookies','image/src',2.00),
];

const ShoppingCart = new ShoppingCart();
document.getElementById('shopping-cart').innerHTML=0;
document.getElementById('container').innerHTML =
    Items.map(item => item.render()).join('');

 document.querySelector('.add').forEach(button=>{
    button.addEventListener('click',(event)=>{
        const index = parseInt(event.target.dataset.index);
        ShoppingCart.addItem(Items[index]);
        ShoppingCart.render();
    });
 });