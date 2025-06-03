// ==============================
// 🌱 Sélection des éléments
// ==============================

// Inputs


// Buttons
const buttonsContainer = document.querySelector(`.buttons-container`);
const moviesWrapper = document.querySelector(`.movies-wrapper`);

// Display

// ==============================
// 🧠 Variables globales
// ==============================

// ==============================
// 🎊 Fonctionnalités
// ==============================
const getMoviesAPI = async (filter) => {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/tv/${filter}?api_key=6631e5f1dc96088e0d26b86da29b5b6a`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erreur lors du chargement des séries :', error);
  }
};

async function displayMovies(category = `top_rated`) {
    moviesWrapper.innerHTML =``;
    const datas = await getMoviesAPI(category);
    datas.results.forEach(result => {
        moviesWrapper.innerHTML += `
            <div class="tv-show" data-id="${result.id}">
                <h2>${result.name}</h2>
                <div class="tv-show__img">
                    <img src="https://image.tmdb.org/t/p/w500/${result.poster_path}">
                    <div class="note">
                        ${(result.vote_average*10).toFixed(0)} %
                    </div>
                </div>
            </div>
        `
    });
    
}
// ==============================
// 🧲 Événements
// ==============================

buttonsContainer.addEventListener(`click`, async (e) => {
  e.preventDefault();
  if (e.target.matches(`button`)) {
    const category = e.target.dataset.tv;
    displayMovies(category);
  }
})



