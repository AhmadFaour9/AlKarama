import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {RouterProvider } from 'react-router-dom';
import router from './Routes/router';

function App() {
  
  return (
    <div className="App ">
     <RouterProvider router={router}/>


    </div>
  );
}


export default App;
 