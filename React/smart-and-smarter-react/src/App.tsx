import React from 'react';
import logo from './logo.svg';
import './App.css';
import WeaponTable from './Components/WeaponTable';
import Temptop from './Components/Temptop';
import Itembox from './Components/ItemBox'
import Testing1 from './Components/SelectionBox';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Testing1/>
        <Temptop/>
        <WeaponTable/>
        
      </header>
    </div>
  );
  
}

export default App;
