import './App.css';
import React from "react";
import useFreshpaint from './useFreshpaint';
import FreshpaintForm from './FreshpaintForm';

const FRESHPAINT_ENV_ID = '95629632-e650-498b-b78d-98afb6fb7d90'

function App() {
  useFreshpaint(FRESHPAINT_ENV_ID)
  return (

    <div className="App">
      <header className="App-header">
        <img src="https://cdn.prod.website-files.com/62962823bc0f135ff1f3fa03/62962823bc0f13d57cf3fd08_Freshpaint%20logo%20light.svg" width='420' className="App-logo" alt="logo" />
        <FreshpaintForm />
      </header>
      
    </div>
  );
}

export default App;

