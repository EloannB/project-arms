let button = document.getElementById('button');
let cart = document.getElementById('cart');


// let cartItems = []; // Initialize an empty array to store cart items


const cartItem = document.createElement('div');
cartItem.classList.add('cart-item');


fetch('assets/data/article.json')
    .then(response => response.json())
    .then(data => {
        for (article of data) {

            const subtotal = article.Prix * article.Nbr;

            cartItem.innerHTML = `
    <div class="row align-items-center">
        <div class="col-2">
            <img src="assets/img/${article.Image}" alt="Product Image" class="img-fluid">
        </div>
        <div class="col-2">
            <p>${article.Ref}</p> <!-- Product Reference -->
        </div>
        <div class="col-2">
            <p>${article.Nbr}</p> <!-- Quantity -->
        </div>
        <div class="col-2">
            <p>$${article.Prix}</p> <!-- Price -->
        </div>
        <div class="col-2">
            <p>$${subtotal}</p> <!-- Subtotal -->
        </div>
        <div class="col-2">
            <!-- You can include logic to calculate the total -->
            <!-- For example, accumulate subtotal of all items to get total -->
        </div>
    </div>
    <hr>
`;


            cart.appendChild(cartItem);

            // Functionality for plus and minus buttons to adjust quantity within stock limit
            const quantityButtons = cartItem.querySelectorAll('.quantity-btn');
            const stockQuantity = cartItem.querySelector('.stock-quantity');

            quantityButtons.forEach(button => {
                button.addEventListener('click', function () {
                    if (button.classList.contains('plus') && article.Nbr < article.StockLimit) {
                        article.Nbr++; // Increment the quantity within stock limit
                    } else if (button.classList.contains('minus') && article.Nbr > 0) {
                        article.Nbr--; // Decrement the quantity if greater than 0
                    }
                    stockQuantity.textContent = article.Nbr; // Update displayed quantity

                    // You can add logic here to update the stock quantity in your data structure or perform other actions
                });
            });
            button.addEventListener('click', function () {
            })
        }
    });