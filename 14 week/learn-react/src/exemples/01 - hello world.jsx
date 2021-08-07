// afisam un hellow world

// v1 DOM APi

const helloWorld = document.createElement('h1')
helloWorld.innerText = "hellow world JS" 

document.body.appendChild(helloWorld)

//v2 React

import React from 'react';
import ReactDOM from 'react-dom';

const helloWorldReact = React.createElement('h1', null, "Hello world w/React" )

ReactDOM.render(
    helloWorldReact,
    document.getElementById('root')
    )

//V3 react jsx

const hellowWorldJSX = (<h1>Hello world JSX</h1>)

ReactDOM.render(
    hellowWorldJSX,
    document.getElementById('root')
    )