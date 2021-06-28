// 1.1 Generate a Random dog photo

const resultDog = document.getElementById("result-dog")

function getRandomDog() {

    fetch('https://random.dog/woof.json')
        .then(res => res.json())
        .then(data => {
            if (data.url.includes('.mp4')) {
                getRandomDog()
            } else {

                resultDog.innerHTML = `<img src="${data.url}"/> `
            }
        })

}

getRandomDog();


