function searchMovie(){
    const request = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/moviefinder/filmes');
    request.then(addMovies);x
}
function addMovies(response){
    const movieData = response.data;
    console.log(movieData);
    loadMovie(movieData);
}
function loadMovie(movieData){
    for (let i = 0; i < movieData.length; i++){
        const movieContent = document.querySelector(".movies");
        movieContent.innerHTML += `
        <div class="movie">
            <img src=${movieData[i].imagem}>
            <div class="title">${movieData[i].titulo}</div>
            <button>
                Comprar
                <ion-icon name="cart-outline"></ion-icon>
            </button>
        </div>
      `;
    }
}
searchMovie();