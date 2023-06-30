const apikey = "90e3626c";

async function defaultMovie() {
  const response = await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=90e3626c");
  const data = await response.json();
  console.log(data);

  var title = document.getElementById("title");
  title.textContent = "Title: " + data.Title;

  var release = document.getElementById("releaseDate");
  release.textContent = "Release Date: " + data.Released;

  var genre = document.getElementById("genre");
  genre.textContent = "Genre: " + data.Genre;

  var rating = document.getElementById("rating");
  rating.textContent = "IMDB Rating: " + data.Ratings[0].Value;

  var poster = document.getElementById("image");
  poster.src = data.Poster;
}

window.onload = defaultMovie;
