function createPostHTML(title, text) {

    const titleH1 = document.createElement('h1')
    titleH1.innerText = title;

    const textP = document.createElement('p');
    textP.innerText = text;

    const article = document.createElement('article')

    article.appendChild(titleH1);
    article.appendChild(textP);

    return article;

}

function displayPosts() {

    fetch('http://localhost:3000/posts', { method: 'GET' })
        .then((response) => {
            return response.json();

        })
        .then(posts => {
            const postListHTML = document.getElementById('post-list')
            for (let index = 0; index < posts.length; index++) {

                const currentPost = posts[index];
                const postHTML = createPostHTML(currentPost.title, currentPost.text)

                postListHTML.appendChild(postHTML)

            }

        })
}

displayPosts();


var inputTitle = document.getElementById("inputTitle")
var inputText = document.getElementById("inputText")

function createPost() {

    const post = { title: inputTitle.value, text: inputText.value }

    fetch('http://localhost:3000/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(post)
    })

    return post;

}

const btnAdd = document.getElementById('btnAdd')
btnAdd.addEventListener('click', function () {

    createPost();
})


