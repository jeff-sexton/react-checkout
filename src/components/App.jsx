import React from "react";

import "./App.css";
import useProductData from "../hooks/useProductData";
import NavBar from "./NavBar";

function App() {
  const { state } = useProductData();
  return (
    <div className="App">
      <NavBar/>
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {state.products.length > 0 && state.products.length}
      </header>

      
    </div>
  );
}

export default App;
