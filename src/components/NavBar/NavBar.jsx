import React from "react";

import { PRODUCTS, CART } from "../App";

const NavBar = ({ setVisualMode }) => {
  return (
    <nav>
      <button onClick={() => setVisualMode(PRODUCTS)}>Products</button>
      NavBar
      <button onClick={() => setVisualMode(CART)}>Cart</button>
    </nav>
  );
};

export default NavBar;
