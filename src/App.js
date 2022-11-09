import React from 'react';
import Questioner from './screens';
import data from './data/data.json';
import './App.css';

function App() {
  return (
    <div className="App"><Questioner {...data}/></div>
  );
}

export default App;
