// Components

// ne putem gandi ca la o functie/clasa. 
//refolosim codul

// putem face componente in react folosind functii si clase
// totu in react este o componenta

import React from 'react';
import ReactDOM from 'react-dom';

class PostCls extends React.Component {
    render() {
        return (
            <div>
                <h1>Post Class</h1>
            </div>
        )
    }
}

function Post() {
    const myName = "Andrew"
    return(
        <div>
        <h1>Title 1 JSX</h1>
        <p>Content 1 JSX</p>
        <p>Autor: {myName} </p>
        </div>
    )
}

function App () {
    return (
        <div>
            Hello world
            <Post />
            <Post />
            <Post />

            <PostCls />
        </div>
    )
};

ReactDOM.render(
    <App />,
    document.getElementById('root')
)