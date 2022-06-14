import './App.css';
import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from './components/Homepage';
import Reviews from './components/Reviews';
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'



function App() {


  return (
    <BrowserRouter>
    <div className="App">
    <Header />
    <Nav />
      <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/reviews" element={<Reviews />}/>
      <Route path="/reviews?:category=" element={<HomePage />} />
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
