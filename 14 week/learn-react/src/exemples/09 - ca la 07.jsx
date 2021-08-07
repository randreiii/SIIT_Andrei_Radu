import React from 'react';
import ReactDOM from 'react-dom';


class ButtonColor extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            color: 'red'
        }
    }

    render() {
        const btnStyle = {
            backgroundColor: this.state.color,
            margin: 20,
            padding: 10,
            fontSize: 26
        }
        return (
            <button style={btnStyle}
                onClick={() => {
                    if (this.state.color === 'red') {
                        this.setState({ color: 'blue' })
                    } else {
                        this.setState({ color: 'red' })

                    }
                }}
            >Color</button>
        )
    }
}


function App() {
    return (
        <div>
            <ButtonColor />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)