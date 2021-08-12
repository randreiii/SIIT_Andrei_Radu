import React from 'react'
import './App.css'
import Home from './components/Home/home'
import TodoAdd from './components/todoAdd/todoAdd'


function App() {

  return (
    <div className="App">
      <div><TodoAdd /></div>
      <div><Home /></div>
    </div>
  )
}

export default App;
