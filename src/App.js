import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import Pokemon from './components/Pokemon';

function App() {
 

  return (
    <div>
      <Pokemon pokeName={"pikachu"}/>
    </div>
  );
}

export default App;