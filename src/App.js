import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import  Header from './conponents/Header';
import  Home from './features/Home';
import  Footer from './conponents/Footer';

import NotFoundPage from './features/NotFoundPage'



function App() {
  return (
    <BrowserRouter> 
   
      <div className="App">    
      <Header/>
      <Routes>
        <Route path="*" element={<Home/>} />
        <Route path="/err" element={<NotFoundPage />} />
      </Routes>
      <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
