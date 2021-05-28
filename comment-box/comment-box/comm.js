var commentList = [
    {
        commentH3: "email1@gmail.com",
        commentP: "textul introdus de user in input"
    },
    {
        commentH3: "email1@gmail.com",
        commentP: "Acesta este comentariul urmator"
    },
    {
        commentH3: "email1@gmail.com",
        commentP: "Alt comentariu"
    }
]

function createComment(mesaj) {
    var commentItemDiv = document.createElement('div')

    var commentH3 = document.createElement('h3')
    commentH3.innerText = "email1@gmail.com"
    var commentP = document.createElement('p')
    commentP.innerText = mesaj

    commentItemDiv.appendChild(commentH3)
    commentItemDiv.appendChild(commentP)

    return commentItemDiv;
}

for (var i = 0; i < commentList.lenght; i++) {
}

var btn = document.getElementById('btnadd')

var inputMesaj = document.getElementById('mesaj')

btn.addEventListener('click', function () {

    console.log('valoare din inputMesaj:', inputMesaj.value)

    var commentListContainer = document.querySelector('.comment-list')
    var commentItemDiv = createComment(inputMesaj.value)
    commentListContainer.appendChild(commentItemDiv)
})



