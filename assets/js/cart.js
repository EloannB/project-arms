let button = document.getElementById('button');
let cart = document.getElementById('cart');


// let cartItems = []; // Initialize an empty array to store cart items


const cartItem = document.createElement('div');
cartItem.classList.add('cart-item');


fetch('assets/data/article.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(function (article) {

            cartItem.innerHTML = `
    <div class="row align-items-center">
        <div class="col-4">
            <img src="assets/img/${article.Image}" alt="Product Image" class="img-fluid">
        </div>
        <div class="col-4">
            <h6>${article.Nom}</h6>
            <p>$${article.Prix}</p>
        </div>
        <div class="col-4">
            <button class="btn btn-secondary btn-sm quantity-btn minus">-</button>
            <span class="stock-quantity">${article.nbr}</span >
        <button class="btn btn-secondary btn-sm quantity-btn plus">+</button>
        </div >
    </div >
            <hr>
                <div class="col-12">
                    <!-- Clear All button (Replace this with your clear button functionality) -->
                    <button onclick='cartItem.innerHTML =""' class="btn btn-danger btn-sm">Clear All</button>
                </div>
                `;


            cart.appendChild(cartItem);

            const quantityButtons = cartItem.querySelectorAll('.quantity-btn');
            const stockQuantity = cartItem.querySelector('.stock-quantity');

            quantityButtons.forEach(button => {
                button.addEventListener('click', function () {
                    if (button.classList.contains('plus')) {
                        stockQuantity.textContent = parseInt(stockQuantity.textContent) + 1;
                    } else if (button.classList.contains('minus') && parseInt(stockQuantity.textContent) > 0) {
                        stockQuantity.textContent = parseInt(stockQuantity.textContent) - 1;
                    }
                    // You can add logic here to update the stock quantity in your data structure or perform other actions
                });
                button.addEventListener('click', function () {
                })
            })
        });