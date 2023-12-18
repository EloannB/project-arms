function getParameterByName(ref) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(ref);
}

const refValue = getParameterByName('ref');

// console.log('Ref value:', refValue);

fetch('assets/data/article.json')
  .then(response => response.json())
  .then(data => {
    for (const article of data) {
      // console.log(article)
      if (article.Ref === refValue) {
        const card = document.createElement('div')
        card.classList.add('col-lg-4', 'col-10', 'm-3', 'm-auto')

        card.innerHTML = `
        <div class="card mb-3 custom-card-style">
            <div class="row g-0">
                <div class="col-md-5">
                    <img src="assets/img/${article.Image}" class="img-fluid rounded-start custom-card-img" alt="Image article">
                </div>
                <div class="col-md-7">
                    <div class="card-body">
                        <h5 class="card-title custom-card-title">${article.Nom}</h5>
                        <p class="card-text custom-card-price">${article.Prix}€</p>
                        <p class="card-text custom-card-description">${article.Description}</p>
                        <p class="card-text custom-card-ref">Référence: ${article.Ref}</p>
                        <p class="card-text custom-card-stock">Stock: ${article.Nbr}</p>
                        <p class="card-text custom-card-category fw-bold ">Category: ${article.Categorie}</p>
                        <div class="stars-container mb-3">
              ${Array.from({ length: 5 }, (_, index) => `
                <i class="bi bi-star-fill star ${index >= article.Note ? 'empty' : ''}"></i>
              `).join('')}
            </div>
                        <button type="button" class="btn btn-outline-danger custom-add-to-cart-btn" onclick="addToCart('${article.Image}', '${article.Prix}', '${article.Ref}', '${article.Nbr}')">Ajouter au panier</button>
                    </div>
                </div>
            </div>
        </div>
    `;





        document.getElementById('cardDescript').appendChild(card)

      }
    }
  }
  )