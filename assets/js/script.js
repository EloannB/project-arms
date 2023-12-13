fetch('assets/data/article.json')
  .then(response => response.json())
  .then(data => {
    data.forEach(function (article) {

      const card = document.createElement('div')
      card.classList.add('card', 'col-lg-2', 'col-10', 'm-3')

      card.innerHTML = `
                <img src="assets/img/${article.Image}" class="card-img-top" alt="Image arme">
                <div class="card-body">
                    <h5 class="card-title">${article.Nom}</h5>
                    <p class="card-text">${article.Prix}</p>
                    <a href="${article.Ref}" class="btn btn-secondary view-more">Ajoute au panier</a>
                </div>
            `


      document.getElementById('cardArme').appendChild(card)
    })
  })


