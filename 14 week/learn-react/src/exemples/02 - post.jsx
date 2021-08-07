// React fara jsx

import React from 'react';
import ReactDOM from 'react-dom';


const postTitle = React.createElement('h1', null, 'Title 1')
const postBody = React.createElement('p', null, 'Content 1')

const PostElment = React.createElement('div', null, postTitle, postBody)

ReactDOM.render(
    PostElment,
    document.getElementById('root')
)

// React with JSX

const PostElmentJSX = (
    <div>
        <h1>Title 1 JSX</h1>
        <p>Content 1 JSX</p>
    </div>
)

ReactDOM.render(
    PostElmentJSX,
    document.getElementById('root')
)