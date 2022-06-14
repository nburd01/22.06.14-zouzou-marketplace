
import './App.css';
import axios from "axios";
import Apartments from './components/apartments';
import React, { useEffect, useState } from 'react';

const API_URL = "http://localhost:3000/apartments";

  function getAPIDATA() {
    return axios.get(API_URL).then((response) => response.data)
  }


function App() {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    let mounted = true; 
    getAPIDATA().then((items) => {
      if (mounted) {
        setApartments(items);
      }
  });
  
  return () => { (mounted = false) };

}, []);

  return (
    <div className="App">
      <h1>Bonjour à tous, et bienvenue dans cette table ronde... et moi je viens de l'APP.JS</h1>
      <Apartments apartments={apartments} />
      
    </div>
    
  );
}

export default App;
