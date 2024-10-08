import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Components/Todo'
import store from './store'
import { Provider } from 'react-redux'

function App() {

  return (
    <>

<h1>Todo APP</h1>
      <Provider store={store}>

      
      
      <Todo/>
      </Provider>
    </>
  )
}

export default App
