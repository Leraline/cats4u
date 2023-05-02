import React from 'react';
import './App.css';
import {RouterProvider} from "react-router-dom"
import Menu from './components/Menu/Menu';
import { router } from './routes/index';



function App() {

    return (
      <div>
        <Menu/>
        <RouterProvider router={router}/>
      </div>
    )
  
  
}

export default App;
