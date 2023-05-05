let movies = [];
const addMovie = (ev)=>{
    ev.preventDefault();  
    let movie = {
        id: Date.now(),
        Name: document.getElementById('Name').value,
        Phone: document.getElementById('Phone').value,
        Email: document.getElementById('Email').value,
        Message: document.getElementById('Message').value
    }
    movies.push(movie);
    document.forms[0].reset(); 

    console.warn('added' , {movies} );

    localStorage.setItem('MyMovieList', JSON.stringify(movies) );
}
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn').addEventListener('click', addMovie);
});
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
