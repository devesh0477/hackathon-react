import logo from './logo.svg';
import './App.css';
import React, { createContext } from 'react';
import Main from './main/Main';
import {BrowserRouter, NavLink, Routes, Route} from "react-router-dom";
import About from './main/About';

export const prjContext = createContext('');

function App() {
  return (
    <BrowserRouter>
    <prjContext.Provider value= '[Devesh]'>
    <nav>
      <NavLink className="nav1" to="">Home</NavLink>
      <NavLink className="nav1 nav2" to="about">About</NavLink>
    </nav>
    <Routes> 
      <Route path="" element={<Main />} />
      <Route path="about" element={<About />} />
    </Routes>
    </prjContext.Provider>
    </BrowserRouter>
  );
}

export default App;
