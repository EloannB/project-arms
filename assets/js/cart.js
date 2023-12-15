function addToCart(itemImage, itemPrice, itemRef, itemStock) {
    const cartItemsContainer = document.getElementById("canvasBody");





    const newItemRow = document.createElement("tr");
    newItemRow.innerHTML = `
    <td><img src="assets/img/${itemImage}" alt="Product Image" class="img-fluid"></td>
    <td>${itemRef}</td>
    <td>
        <input type="number" class="form-control quantityInput" value="1" min="1" max="${itemStock}">
    </td>
    <td style="font-weight: bold" class="total">$${parseFloat(itemPrice).toFixed(2)}</td>
    <td>
            <button style="display:block" class="button">Clear Item</button>
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
        total.textContent = "$" + subtotal.toFixed(2);
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
        console.log(totalPrice.toFixed(2));

        const buttonsContainer = document.querySelector('.buttonsContainer');
        const formInput = document.createElement('input');
        if (buttonsContainer) {
            buttonsContainer.appendChild(formInput);
            formInput.classList.add('totalInput');
            formInput.value = totalPrice.toFixed(2);
        }
        repositionClearButton()

    }




    function addClearAllButton() {

        const clearfooter = document.getElementById("tableFooter");

        const buttonsContainer = document.createElement("div");
        const totalInput = document.querySelector(".totalInput");
        buttonsContainer.innerHTML = `
                            <div class="d-flex justify-content-between align-items-center">
                                <!-- Div des boutons -->
                                <button class="btn btn-danger clearAll">Effacer tout</button>
                                <input type="text" class="form-control text-center formInput" value=${totalInput} readonly>
                                <button class="btn btn-success">Valider</button>
                            </div>
        `;
        buttonsContainer.classList.add("buttonsContainer")

        const clearAllButton = buttonsContainer.querySelector(".clearAll");
        clearAllButton.addEventListener("click", () => {
            cartItemsContainer.innerHTML = "";
            if (cartItemsContainer.innerHTML = "") {
                cartItemsContainer.removeChild(buttonsContainer);
            }
            calculateTotalCartPrice()


        })
        // Append the clearAllButton at the end of clearfooter
        clearfooter.appendChild(buttonsContainer);
    }






    function repositionClearButton() {
        const buttonsContainer = document.querySelector('.buttonsContainer');
        const clearfooter = document.getElementById('tableFooter');
        // Check if Clear All button exists
        if (buttonsContainer) {
            clearfooter.removeChild(buttonsContainer); // Remove the existing button
        }

        // Add the Clear All button at the end
        addClearAllButton();
    }

    calculateTotalCartPrice();

}

