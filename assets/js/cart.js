let button = document.getElementById('button');
let cart = document.getElementById('cart');


let cartItems = []; // Initialize an empty array to store cart items

function addToCart(item) {
    // Add the item to the cartItems array
    cartItems.push(item);

    console.log(`Added ${item} to the cart`);
    console.log('Cart Items:', cartItems);

    // You can perform other actions here as needed
    // For example, update the cart UI, trigger an event, etc.
}

button.addEventListener('click', function () {
    addToCart(item);

})