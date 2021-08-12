import React from "react";

let text;
let id;
let checked;

class TodoItem extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            checked: this.props.checked,
            id: this.props.id,
            text: this.props.text,
        }
        this.handleChange = this.handleChange.bind(this)
        id = this.props.id
        text = this.props.text
    }

    handleChange(e) {
        this.setState({
            checked: e.target.checked
        })
        checked = this.state.checked
    }

    updateTodo() {
        fetch('http://localhost:3000/todos/id' + id, {
            method: "PUT",
            headers: {

                "Content-Type": "application/json",
            },
            body: JSON.stringify({ "checked": checked, "id": id, "text": text })
        })
            .then(response => console.log(response))
        // .then(window.location.reload(true));
    }

    deleteTodo() {
        fetch('http://localhost:3000/todos/' + id, {
            method: "DELETE",
            headers: {

                "Content-Type": "application/json",
            },
            body: JSON.stringify({ "id": id, "text": text, "checked": checked })

        })
            .then(response => console.log(response))
        // .then(window.location.reload(true));
    }

    render() {
        return (
            <div className="todoList">
                <div className="display-todo">
                    <p><br />{this.props.text}</p>
                </div>

                <div className="changes-todo">
                    <button
                        id={this.props.id}
                        onClick={this.deleteTodo}
                        style={{ margin: 5 }}
                    >
                        Delete</button>
                    <input
                        type="checkbox"
                        name="Checked"
                        id={this.state.id}
                        onChange={this.handleChange}
                        style={{ margin: 5 }}
                    />
                    <button
                        id={this.state.id}
                        onClick={this.updateTodo}
                        style={{ margin: 5 }}
                    >
                        Update to do</button>
                </div>
            </div>
        )
    }
}


export default TodoItem;