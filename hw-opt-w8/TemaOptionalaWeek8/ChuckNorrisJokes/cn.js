var jokeCN = document.querySelector(".box > p")

function displayJoke() {

    fetch('http://api.icndb.com/jokes/random')
        .then(res => res.json())
        .then(data => jokeCN.innerHTML = data.value.joke)

}

displayJoke();