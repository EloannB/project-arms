fetch('assets/data/article.json')
    .then(response => response.json())
    .then(data => {
        let index = 0;
        data.forEach(function (article) {

            const card = document.createElement('div')
            card.classList.add('card', 'col-lg-3', 'col-8', 'm-3')

            card.innerHTML = `
                <img src="assets/img/${article.Image}" class="card-img-top" alt="Image arme">
                <div class="card-body">
                    <h5 class="card-title">${article.Nom}</h5>
                    <p class="card-text">${article.Prix}</p>
                    <a href="movie.html?id=${article.Ref}" class="btn btn-secondary view-more">Voir Plus</a>
                </div>
            `


            document.getElementById('cardArme').appendChild(card)
        })
    })
    

