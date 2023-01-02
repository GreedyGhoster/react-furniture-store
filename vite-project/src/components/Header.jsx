import React from "react";
import "/public/Style.css";
import Order from "./Order";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

export default function Header({ orders }) {
  const [cartOpen, setCartOpen] = useState(false);
  return (
    <header>
      <div>
        <span className="logo">House Staff</span>
        <ul className="tools">
          <li>Про нас</li>
          <li>Контакты</li>
          <li>Кабинет</li>
        </ul>
        <FaShoppingCart
          onClick={() => setCartOpen(!cartOpen)}
          className={`shop-cart-button ${cartOpen ? "active" : ""}`}
        />
        {cartOpen && (
          <div className="shop-cart">
            {orders.map((element) => (
              <Order key={element.id} item={element} />
            ))}
          </div>
        )}
      </div>
      <div className="presentation"></div>
    </header>
  );
}
