function secondPage(ref) {
  window.location.href = "descrip.html?ref=" + ref
}
var cardArme = document.getElementById("cardArme")
var selectElement = document.getElementById("trier")
var defaultValue = document.getElementById("default")
var arme1 = document.getElementById("arme1")
var arme2 = document.getElementById("arme2")
var arme3 = document.getElementById("arme3")
// Ajoutez un écouteur d'événements pour détecter les changements de sélection



fetch('assets/data/article.json')
  .then(response => response.json())
  .then(data => {
    data.forEach(function (article) {

      const card = document.createElement('div')
      card.classList.add('card', 'col-lg-2', 'col-10', 'm-3')

      const cartButton = document.createElement('button');
      cartButton.classList.add('btn', 'btn-dark', 'btn-cart', 'btn-round', 'float-right')
      cartButton.innerHTML = '<i class="bi bi-cart-plus"></i>'
      cartButton.onclick = function () {

        console.log('Article ajouté au panier:', article.Nom)
      };

      card.innerHTML = `
        <img src="assets/img/${article.Image}" class="card-img-top" alt="Image arme">
        <div class="card-body">
            <h5 class="card-title">${article.Nom}</h5>
            <p class="card-text">${article.Prix}€</p>
            <button onclick="secondPage('${article.Ref}')" class="view-more">Voir Plus</button>
        </div>
        ${cartButton.outerHTML}
      `


      document.getElementById('cardArme').appendChild(card)
    })
  })
selectElement.addEventListener("change", function () {
  // Obtenez la valeur sélectionnée
  var selectedValue = selectElement.value;

  // Affichez la valeur sélectionnée (vous pouvez également faire autre chose avec cette valeur)








  console.log("Valeur sélectionnée : " + selectedValue)






  // arme blanche 


  if (selectedValue === arme1.value) {

    cardArme.innerHTML = ""

    fetch('assets/data/article.json')
      .then(response => response.json())
      .then(data => {
        data.forEach(function (article) {
          if (article.Categorie.includes("blanche")) {
            const card = document.createElement('div')
            card.classList.add('card', 'col-lg-2', 'col-10', 'm-3')

            card.innerHTML = `
                    <img src="assets/img/${article.Image}" class="card-img-top" alt="Image arme">
                    <div class="card-body">
                        <h5 class="card-title">${article.Nom}</h5>
                        <p class="card-text">${article.Prix}€</p>
                        <button onclick="secondPage('${article.Ref}')" class="view-more">Voir Plus</button>
                    </div>
                `


            document.getElementById('cardArme').appendChild(card)
          }
        })
      })

  }

  // arme a feu 


  if (selectedValue === arme2.value) {

    cardArme.innerHTML = ""

    fetch('assets/data/article.json')
      .then(response => response.json())
      .then(data => {
        data.forEach(function (article) {
          if (article.Categorie.includes("feu")) {
            const card = document.createElement('div')
            card.classList.add('card', 'col-lg-2', 'col-10', 'm-3')

            card.innerHTML = `
                    <img src="assets/img/${article.Image}" class="card-img-top" alt="Image arme">
                    <div class="card-body">
                        <h5 class="card-title">${article.Nom}</h5>
                        <p class="card-text">${article.Prix}€</p>
                        <button onclick="secondPage('${article.Ref}')" class="view-more">Voir Plus</button>
                    </div>
                `


            document.getElementById('cardArme').appendChild(card)
          }
        })
      })

  }

  // equipement de defense 


  if (selectedValue === arme3.value) {

    cardArme.innerHTML = ""

    fetch('assets/data/article.json')
      .then(response => response.json())
      .then(data => {
        data.forEach(function (article) {
          if (article.Categorie.includes("Équipement")) {
            const card = document.createElement('div')
            card.classList.add('card', 'col-lg-2', 'col-10', 'm-3')

            card.innerHTML = `
                        <img src="assets/img/${article.Image}" class="card-img-top" alt="Image arme">
                        <div class="card-body">
                            <h5 class="card-title">${article.Nom}</h5>
                            <p class="card-text">${article.Prix}€</p>
                            <button onclick="secondPage('${article.Ref}')" class="view-more">Voir Plus</button>
                        </div>
                    `


            document.getElementById('cardArme').appendChild(card)
          }
        })
      })

  }



});


// filtre avec searchbar


document.addEventListener('DOMContentLoaded', function () {
  var searchInput = document.querySelector('input[type="search"]')
  var itemsToFilter = document.getElementById('cardArme');

  searchInput.addEventListener('input', function () {
    var searchTerm = this.value.toLowerCase();

    itemsToFilter.querySelectorAll('.card').forEach(function (item) {
      var itemName = item.querySelector('.card-title').textContent.toLowerCase();

      if (itemName.includes(searchTerm)) {
        item.style.display = 'block'
      } else {
        item.style.display = 'none'
      }
    });
  });

  var trierSelect = document.getElementById('trier');
  trierSelect.addEventListener('change', function () {
    var selectedCategory = this.value;

    itemsToFilter.querySelectorAll('.card').forEach(function (item) {
      var itemCategory = item.getAttribute('data-category');

      if (selectedCategory === 'disabled' || selectedCategory === itemCategory) {
        item.style.display = 'block'
      } else {
        item.style.display = 'none'
      }
    });
  });
});

