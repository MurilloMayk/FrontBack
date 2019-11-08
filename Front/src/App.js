import React from 'react';
import {BrowserRouter as Router } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import AppHeader from './components/AppHeader';
import Routes from './Routes';
import Footer from './components/Footer';

/*Função onde está toda parte fixa do site*/
function App() {
  return (
    <Router>

        <AppHeader />
       
        <Routes />
        <Footer/> 
     
    </Router>

  );
}
    
    export default App;
