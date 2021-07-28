import React, { useState } from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false);

  const addItemToCart = () => {
    setIsInCart(true);
  }

  return (
    <li className={isInCart? 'in-cart' : ''}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addItemToCart}>Add to Cart</button>
    </li>
  );
}

export default Item;
