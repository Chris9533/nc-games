import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from './components/Homepage';

function App() {
  return (
    <div className="App">
    <Header />
    <Nav />
    <HomePage />
    </div>
  );
}

export default App;
