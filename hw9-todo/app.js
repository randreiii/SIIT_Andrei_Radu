const todoListHTML = document.getElementById('todo-list')

function createTODOListItem(id, text) {

    const todoItem = document.createElement('div')

    const textP = document.createElement('p')
    textP.innerText = text;

    const deleteBtn = document.createElement('button')
    deleteBtn.setAttribute('class', 'deleteBtn')
    deleteBtn.setAttribute('id', id)
    deleteBtn.innerText = " x ";

    deleteBtn.addEventListener('click', function () {
        deleteTodoServer(id);
    })

    const inputCheckbox = document.createElement('input')
    inputCheckbox.type = "checkbox";
    inputCheckbox.id = "checkbox";

    // inputCheckbox.addEventListener('change', function() {
    // todoItem.checked = !todoItem.checked;
    // updateTodo();
    // })

    todoItem.appendChild(textP)
    todoItem.appendChild(deleteBtn)
    todoItem.appendChild(inputCheckbox)

    return todoItem;

}

// 1 . Afisarea listei de TODO ( GET )

async function getTodos() {

    try {
        const response = await fetch('http://localhost:3000/todos');
        const todos = await response.json();

        console.log(todos)

        return todos;

    } catch (err) {
        console.log('Errorrr')
    }
}


// 2. User poate sa adauge un todo item ( POST )

async function createTodo() {

    const todoInput = document.getElementById('todo-input')

    const list = { text: todoInput.value }

    const response = await fetch('http://localhost:3000/todos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(list)
    });
    window.location.reload();

}

async function showTodos() {

    const list = await getTodos();
    for (let index = 0; index < list.length; index++) {

        const currentPost = list[index];
        const todoHTML = createTODOListItem(currentPost.id, currentPost.text)
        todoListHTML.appendChild(todoHTML)
    }
}

const addBtn = document.getElementById('addBtn')
addBtn.addEventListener('click', function () {
    createTodo();
})

// 3. User poate sa sterga un todo item ( DELETE )

async function deleteTodoServer(id) {

    const response = await fetch(`http://localhost:3000/todos/${id}`, {
        method: 'DELETE',
    });

    window.location.reload();
    return response.json();

}

showTodos();




// 4. User poate sa poata bifa un todo, ( se face update la checked din false in true) ( PUT )


async function updateTodo(todoItem) {
    const response = await fetch('http://localhost:3000/todos', {
    method: 'PUT', 
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(todoItem)
    })
    const data = await response.json();
    return data;
}


