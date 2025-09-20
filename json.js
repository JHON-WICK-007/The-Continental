// Movie object array
const movies = [
    { id: 1, title: "The Dark Knight", genre: "Action", year: 2008, rating: 9.0 },
    { id: 2, title: "Interstellar", genre: "Sci-Fi", year: 2014, rating: 8.6 },
    { id: 3, title: "Inception", genre: "Sci-Fi", year: 2010, rating: 8.8 }
];

// Profile object array (actors/directors)
const profiles = [
    { name: "Christopher Nolan", role: "Director", bestKnownFor: "Inception" },
    { name: "Christian Bale", role: "Actor", bestKnownFor: "The Dark Knight" },
    { name: "Bryan Cranston", role: "Actor", bestKnownFor: "Breaking Bad" }
];

// JSON parse & stringify
const movieJSON = JSON.stringify(movies);
const profileJSON = JSON.stringify(profiles);
console.log("Movie JSON String: \n" + movieJSON);
console.log("Profile JSON String: \n" + profileJSON);

const parsedMovies = JSON.parse(movieJSON);
const parsedProfiles = JSON.parse(profileJSON);
console.log("Parsed Movies: \n", parsedMovies);
console.log("Parsed Profiles: \n", parsedProfiles);

// Show movie list
const movieList = document.getElementById("movieList");
for (let index in parsedMovies) {
    const movie = parsedMovies[index];
    const li = document.createElement("li");
    li.textContent = `${movie.title} (${movie.year}) - ${movie.genre} | ⭐ ${movie.rating}`;
    movieList.appendChild(li);
}

// Show profiles
const profileList = document.getElementById("profileList");
for (let index in parsedProfiles) {
    const profile = parsedProfiles[index];
    const li = document.createElement("li");
    li.textContent = `${profile.name} - ${profile.role} | Known for: ${profile.bestKnownFor}`;
    profileList.appendChild(li);
}