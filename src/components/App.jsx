import React, { useState, useEffect } from "react";

import "./App.css";
import useProductData from "../hooks/useProductData";
import NavBar from "./NavBar";
import ProductList from "./ProductList";
import Cart from "./Cart";

// Visual mode constants
export const PRODUCTS = "PRODUCTS";
export const CART = "CART";
const LOADING = "LOADING";
const LOAD_ERROR = "LOAD_ERROR";

function App() {
  const { state, getInitialProducts } = useProductData();

  const [visualMode, setVisualMode] = useState(LOADING);

  useEffect(() => {
    getInitialProducts().then(() => {
      console.log("show products");
      setVisualMode(PRODUCTS);
    });
  }, []);

  return (
    <div className="App">
      <NavBar setVisualMode={setVisualMode} />

      {visualMode === PRODUCTS && <ProductList products={state.products} />}
      {visualMode === CART && <Cart />}
      {visualMode === LOADING && <div>Loading...</div>}
      {visualMode === LOAD_ERROR && <div>LOADING ERROR!</div>}
    </div>
  );
}

export default App;
