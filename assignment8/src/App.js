import './App.css';
import Navigation from './components/Navigation';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import OrderPage from './pages/OrderPage';
import RegistrationPage from './pages/RegistrationPage';
import items from './data/items';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='info'>
          <Router>
            <Navigation />
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/OrderPage" element={<OrderPage items={items}/>}></Route>
                <Route path="/RegistrationPage" element={<RegistrationPage />}></Route>
            </Routes>
          </Router>
        </div>
      </header>
    </div>
  );
}

export default App;
