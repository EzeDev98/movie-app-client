import { showLoadingSpinner, hideLoadingSpinner, displayErrorMessages } from './utils.js';

const performSearch = async (searchTitle) => {
    const cardContent = document.getElementById('card-content');
    const submitButton = document.getElementById("search_movie");
    
    try {
        submitButton.disabled = true;
        showLoadingSpinner();

        const response = await fetch(`http://localhost:2000/api/v1/get-movies?title=${encodeURIComponent(searchTitle)}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch movies: ${response.status} ${response.statusText}`);
        }

        const movies = await response.json();

        if (!cardContent) {
            console.error("Element #card-content not found!");
            return;
        }
        
        // Clear previous results
        cardContent.innerHTML = '';
        
        if (movies.length === 0) {
            cardContent.innerHTML = '<p class="empty-state">No movies found. Try another search!</p>';
            return;
        }

        // Display movies
        movies.forEach(movie => {
            const movieCard = document.createElement('div');
            movieCard.className = 'card-body';
            movieCard.innerHTML = `
               <div class="card">
                    <a href="/pages/play.html?videoId=${movie.videoUrl.split('embed/')[1]}" class="movie-link">
                        <div class="card-image">
                            <img src="${movie.imageUrl || '/images/placeholder.jpg'}" 
                                 alt="${movie.name}"
                                 onerror="this.src='/images/placeholder.jpg'">
                        </div>
                        <div class="card-details">
                            <div class="card-details-desc">
                                <h3>${movie.name}</h3>
                                <div class="metadata">
                                    <span>${movie.origin}</span>
                                    <span>${movie.genre}</span>
                                    <span>${movie.year}</span>
                                </div>
                            </div>
                            <div class="card-play">
                                <i class="fa fa-play-circle"></i>
                            </div>
                        </div>
                    </a>
                </div>
            `;
            cardContent.appendChild(movieCard);
        });

    } catch(error) {
        console.error("Error during search:", error.message);
        displayErrorMessages(error.message);
    } finally {
        submitButton.disabled = false;
        hideLoadingSpinner();
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const searchForm = document.getElementById("search_form");
    const urlParams = new URLSearchParams(window.location.search);
    const searchTitle = urlParams.get('title');

    if (searchTitle) {
        document.getElementById('movie_title').value = searchTitle;
        performSearch(searchTitle);
    }

    if (searchForm) {
        searchForm.addEventListener("submit", (e) => {
            e.preventDefault();
            
            console.log("Form submitted");

            const title = document.getElementById('movie_title').value.trim();
            
            if (!title) {
                displayErrorMessages("Please enter a movie title");
                return;
            }
            
            location.href = `/pages/search.html?title=${encodeURIComponent(title)}`;
            performSearch(title);
        });
    }
});
