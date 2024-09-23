import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Components/todo';
import {Provider} from "react-redux"; 
import { store } from './app/store';
import AddForm from './Components/AddForm';


function App() {

  return (
    <>
      <Provider store={store}>
          <AddForm/>
          <Todo/>
      </Provider>
    </>
  )
}

export default App
