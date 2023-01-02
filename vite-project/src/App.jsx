import React from "react";
import { useState, useEffect } from "react";
import "/public/Style.css";
import Footer from "./components/Footer";
import ShowAboutItem from "./components/ShowAboutItem";
import Header from "./components/Header";
import Categories from "./components/Categories";
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
  const [currentItems, setCurrentItems] = useState([]);
  const [showAboutItem, setShowAboutItem] = useState(false);
  const [fullItem, setFullItem] = useState({});

  useEffect(() => {
    setCurrentItems(items);
  }, []);

  function addToOrder(item) {
    let isInArray = false;
    orders.forEach((el) => {
      if (el.id === item.id) {
        isInArray = true;
      }
    });
    if (!isInArray) {
      setOrders([...orders, item]);
    }
  }

  function chooseCategory(category) {
    if (category === "all") {
      return setCurrentItems(items);
    } else {
      return setCurrentItems(items.filter((el) => el.category === category));
    }
  }

  function deleteOrder(id) {
    setOrders(orders.filter((el) => el.id !== id));
  }

  function onShowItem(item) {
    setFullItem(item);
    setShowAboutItem(!showAboutItem);
  }

  return (
    <div className="wrapper">
      <Header orders={orders} onDelete={deleteOrder} />
      <Categories chooseCategory={chooseCategory} />
      <Products
        onShowItem={onShowItem}
        items={currentItems}
        onAdd={addToOrder}
      />
      {showAboutItem && (
        <ShowAboutItem
          onShowItem={onShowItem}
          onAdd={addToOrder}
          item={fullItem}
        />
      )}
      <Footer />
    </div>
  );
}
