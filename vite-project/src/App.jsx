import React from "react";
import { useState, useEffect } from "react";
import "/public/Style.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Products from "./components/Products";
export default function App() {
  const [items] = useState([
    {
      id: 1,
      title: "Стол",
      price: "150",
      desc: "aljkrfghulauerfgjagf",
      img: "table.webp",
      category: "tables",
    },
    {
      id: 2,
      title: "Серый стул",
      price: "50",
      desc: "aljkrfghulauerfgjagf",
      img: "chair-grey.jpeg",
      category: "chairs",
    },
    {
      id: 3,
      title: "Диван",
      price: "550",
      desc: "aljkrfghulauerfgjagf",
      img: "sofa.jpeg",
      category: "sofa",
    },
    {
      id: 4,
      title: "Лампа",
      price: "25",
      desc: "aljkrfghulauerfgjagf",
      img: "wall-light.jpeg",
      category: "light",
    },
    {
      id: 5,
      title: "Белый стул",
      price: "50",
      desc: "aljkrfghulauerfgjagf",
      img: "chair-white.jpeg",
      category: "chairs",
    },
    {
      id: 6,
      title: "Белый шкаф",
      price: "250",
      desc: "aljkrfghulauerfgjagf",
      img: "shkaf.jpg",
      category: "wardrobe",
    },
  ]);
  const [orders, setOrders] = useState([]);
  function addToOrder(item) {
    setOrders([...orders, item]);
  }

  return (
    <div className="wrapper">
      <Header orders={orders} />
      <Products items={items} onAdd={addToOrder} />
      <Footer />
    </div>
  );
}
