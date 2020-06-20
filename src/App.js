import React from 'react';
import './App.css';
import Burger from './Component/Burger/burger'
import BurgerControls from "./Component/BurgerControllers/BurgerControls";
const App = ()=> {
  return (
    <div className="App">
        <Burger/>
        <BurgerControls/>
    </div>
  );
}

export default App;
