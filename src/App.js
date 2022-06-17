import './App.css';
import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from './components/Homepage';
import Reviews from './components/Reviews';
import Review from "./components/Review"
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { UserContext } from "./contexts/user"
import { useState } from "react"
import Users from './components/Users';
import PostComment from './components/PostComment';
import ErrorPage from './components/ErrorPage';




function App() {

  const [activeUser, setActiveUser] = useState(null)


  return (
    <BrowserRouter>
    <UserContext.Provider value={activeUser}>
    <div className="App">
    <Header />
    <Nav setActiveUser={setActiveUser}/>
      <Routes>
      <Route path="/:any" element={<ErrorPage />}/>
      <Route path="/" element={<HomePage />}/>
      <Route path="/reviews" element={<Reviews />}/>
      <Route path="/reviews/:review_id" element={<Review />} />
      <Route path="/login" element={<Users setActiveUser={setActiveUser} />}/>
      <Route path="/reviews/:review_id/comments" element={<PostComment />} />
    </Routes>
    </div>
    </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
