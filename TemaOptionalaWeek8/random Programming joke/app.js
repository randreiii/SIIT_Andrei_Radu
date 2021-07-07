// https://official-joke-api.appspot.com/random_joke


let jokes = document.querySelector(".container > p")

function displayJoke () {

const url = "https://official-joke-api.appspot.com/random_joke"

    fetch(url)
        .then (response => response.json())
        .then (data => jokes.innerHTML = data.setup + data.punchline)
        
}

displayJoke();