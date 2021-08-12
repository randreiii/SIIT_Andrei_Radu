import React from 'react'
import TodoItem from '../todoItem/todoItem'

async function getTodos() {
    const response = await fetch('http://localhost:3000/todos');
    return response.json();
}

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todosList: [],
            checked: null
        }
    }

    componentDidMount() {
        getTodos()
            .then((todos) => {
                console.log(todos)
                this.setState({
                    todosList: todos
                })
            })
    }

    renderTodoList() {
        const { todosList } = this.state;

        return todosList.map((todoItem) => {
            return (
                <TodoItem
                    text={todoItem.text}
                    id={todoItem.id}
                    checked={todoItem.checked}
                    key={todoItem.id}
                />)
        })
    }

    render() {
        return (
            <div className="home">
                {this.renderTodoList()}
            </div>
        )
    }
}


export default Home;

