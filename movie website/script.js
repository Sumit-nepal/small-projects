const apikey = "90e3626c";


async function fetchData() {
    const response = await fetch('http://www.omdbapi.com/?i=tt3896198&apikey=90e3626c');
    const data = await response.json();
    console.log(data)

    var title = document.getElementById("title")
    title.textContent = data.Title;

    var poster = document.getElementById("image")
    poster.src = data.Poster;

}
fetchData();
