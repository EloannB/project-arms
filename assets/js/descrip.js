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
        card.classList.add('card', 'col-lg-2', 'col-10', 'm-3')

        card.innerHTML = `
          
            <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="assets/img/${article.Image}" class="img-fluid rounded-start" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${article.Nom}</h5>
                  <p class="card-text">${(article.Prix)}€</p>
                  <p class="card-text">${article.Description}</p>
                  <p class="card-text">Réference: ${article.Ref}</p>
                  <p class="card-text">stock: ${article.Nbr}</p>
                  <button type="button" class="btn btn-outline-danger"  onclick="addToCart('${article.Image}', '${article.Prix}', '${article.Ref}','${article.Nbr}')">Ajouter au panier</button>
                </div>
              </div>
            </div>
          </div>
            `


        document.getElementById('cardDescript').appendChild(card)

      }
    }
  }
  )