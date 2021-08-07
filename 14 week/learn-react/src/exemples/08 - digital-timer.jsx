import React from 'react';
import ReactDOM from 'react-dom';


class DigitalTimer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            secondsCount: 55,
            minutesCount: 59,
            hoursCount: 0
        }
    }

    componentDidMount() {
        // sa pornim timer-ul 
        this.IntervalId = setInterval(() => {

            let { secondsCount, minutesCount, hoursCount } = this.state

            secondsCount = secondsCount + 1;

            if (secondsCount === 60) {
                secondsCount = 0;
                minutesCount++;
            }
            if (minutesCount === 60) {
                minutesCount = 0;
                hoursCount++;
            }

            this.setState({
                secondsCount,
                minutesCount,
                hoursCount
            })
        }, 1000)
    }

    componentWillUnmount() {
        // trebuie sa oprim timer-ul
        clearInterval(this.IntervalId)
    }

    render() {
        const { secondsCount } = this.state
        const { minutesCount } = this.state
        const { hoursCount } = this.state

        return (
            <div>
                <span>{hoursCount < 10 ? '0' + hoursCount : hoursCount}:</span>
                <span>{minutesCount < 10 ? '0' + minutesCount : minutesCount}:</span>
                <span>{secondsCount < 10 ? '0' + secondsCount : secondsCount}</span>
            </div>
        )
    }
}

function App() {

    return (
        <div>
            <DigitalTimer />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)