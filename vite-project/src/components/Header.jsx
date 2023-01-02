import React from "react";
import "/public/Style.css";
import Order from "./Order";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

const showNothing = () => {
  return (
    <div className="empty">
      <h2>Товаров нет</h2>
    </div>
  );
};

export default function Header({ orders, onDelete }) {
  const [cartOpen, setCartOpen] = useState(false);
  let summa = 0;
  orders.forEach((el) => (summa += +el.price));

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
            {orders.length > 0 ? (
              <div>
                {orders.map((element) => (
                  <Order onDelete={onDelete} key={element.id} item={element} />
                ))}
                <b className="summa">Сумма: {summa}$</b>
              </div>
            ) : (
              showNothing()
            )}
          </div>
        )}
      </div>
      <div className="presentation"></div>
    </header>
  );
}
