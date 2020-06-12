import React from "react";

const Product = ({ product: { id, title, thumbnailUrl, priceCents } }) => {
  const addToCart = () => {
    console.log(id);
    const cart = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : {};

    if (cart[id]) {
      cart[id].quantity += 1;
      cart[id].total = cart[id].quantity * priceCents;
    } else {
      cart[id] = { id: id, quantity: 1, itemPrice: priceCents, total: priceCents };
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  };

  return (
    <div>
      <img src={thumbnailUrl} alt="Product Image" />
      <p>{title}</p>
      <p>${priceCents / 100}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

export default Product;
