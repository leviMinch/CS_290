import React from 'react';
import {Link } from 'react-router-dom';

function Navigation() {
    return (
        <nav className="App-nav">
            
            <Link to="/">Home</Link>
            <br />
            <Link to="/OrderPage">Order</Link>
            <br />
            <Link to="/RegistrationPage">Registration</Link>
            <br />
        </nav>
    );
  }
  

export default Navigation;