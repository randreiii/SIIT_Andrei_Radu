// Components with props

// props este un mod de a parametriza o componenta 
// adica a ii da valori din exterior

import React from 'react';
import ReactDOM from 'react-dom';

function Post(props) {
    return (
        <div>
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        </div>
    )
}

function App() {
    return(
        <div>
        <Post title="post 1" content="content 1" />,
        <Post title="post 2" content="content 2" />,
        <Post title="post 3" content="content 3" />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)