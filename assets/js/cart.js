function addToCart(itemImage, itemPrice, itemRef, itemStock) {
    const cartItemsContainer = document.getElementById("canvasBody");
    const quantity = 1;





    const newItemRow = document.createElement("tr");
    newItemRow.innerHTML = `
    <td><img src="assets/img/${itemImage}" alt="Product Image" class="img-fluid"></td>
    <td>${itemRef}</td>
    <td>
        <input type="number" class="form-control quantityInput" value="1" min="1" max="${itemStock}">
    </td>
    <td style="font-weight: bold" class="total">$${parseFloat(itemPrice).toFixed(2)}</td>
    <td>
            <button styme="display:block" class="button">Clear Item</button>
        </td>
`;


    cartItemsContainer.appendChild(newItemRow);

    const button = newItemRow.querySelector('.button')
    const quantityInput = newItemRow.querySelector(".quantityInput");
    const total = newItemRow.querySelector(".total");


    // ----------compteur sous-totale------------
    quantityInput.addEventListener("input", () => {
        const quantity = parseInt(quantityInput.value);
        const subtotal = itemPrice * quantity;
        total.textContent = "$" + subtotal;
        calculateTotalCartPrice();

    });
    // -------clear item---------------
    button.addEventListener('click', function () {
        newItemRow.innerHTML = ""
        calculateTotalCartPrice();

    });







    function calculateTotalCartPrice() {
        const totalElements = document.querySelectorAll(".total");
        let totalPrice = 0;

        totalElements.forEach(element => {
            const price = parseFloat(element.textContent.replace('$', ''));
            totalPrice += price;

        });
        console.log(totalPrice);
        repositionClearButton()

    }




    function addClearAllButton() {
        const clearAllButton = document.createElement("button");
        clearAllButton.textContent = "Clear All";
        clearAllButton.classList.add("button", "clearAll", "btn", "btn-danger");
        clearAllButton.style.display = "inline-block";
        const validateButton = document.createElement("button");
        validateButton.textContent = "Validate";
        validateButton.classList.add("button", "validate", "btn", "btn-valid");
        validateButton.style.display = "inline";
        const buttonsContainer = document.createElement("div");
        buttonsContainer.classList.add("buttonsContainer")
        buttonsContainer.style.display = "flex"; // Use flexbox
        buttonsContainer.style.justifyContent = "space-between"; // Push buttons to each end of the container
        buttonsContainer.appendChild(clearAllButton);
        buttonsContainer.appendChild(validateButton);

        clearAllButton.addEventListener("click", () => {
            cartItemsContainer.innerHTML = "";
            calculateTotalCartPrice()
            if (cartItemsContainer.innerHTML = "") {
                cartItemsContainer.removeChild(buttonsContainer);
            }
        })
        // Append the clearAllButton at the end of cartItemsContainer
        cartItemsContainer.appendChild(buttonsContainer);
    }






    function repositionClearButton() {
        const buttonsContainer = document.querySelector('.buttonsContainer');

        // Check if Clear All button exists
        if (buttonsContainer) {
            cartItemsContainer.removeChild(buttonsContainer); // Remove the existing button
        }

        // Add the Clear All button at the end
        addClearAllButton();
    }

    calculateTotalCartPrice();

}

