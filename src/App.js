
import './App.css';
import Navbar from './Navbar'
import { Container } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './About';
import MovieBox from './MovieBox';
import React from 'react';


function App() {

 
 
  return (
    <Container>
      <BrowserRouter>
       <Navbar />
      </BrowserRouter>
    </Container>
  );
}

export default App;
