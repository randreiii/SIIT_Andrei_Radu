import React from 'react'

class TodoAdd extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            text: "",
        };
        this.fetchTodo = this.fetchTodo.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput({ target }) {
        this.setState({
            [target.name]: target.value
        });
    }

    changeText = () => {
        this.setState(this.handleInput)
    }

    fetchTodo() {

        fetch('http://localhost:3000/todos', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ "text": this.state.text })

        })
            .then(response => console.log(response))
    }

    render() {
        return (
            <div>
                <div>
                    <input
                        type="text"
                        placeholder="Enter to do here"
                        name="text"
                        onChange={this.handleInput}
                    />
                </div>
                <div>
                    <button
                        onClick={this.fetchTodo}
                        id="submit"
                        style={{ margin: 10 }}
                    >
                        Add to do</button>
                    <button
                        onClick={() => window.location.reload(true)}
                        style={{ margin: 10 }}
                    >
                        Refresh</button>
                </div>
            </div>
        )
    }
}

export default TodoAdd;