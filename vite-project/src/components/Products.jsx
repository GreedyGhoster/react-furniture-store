import React from "react";
import Product from "./Product";
import "/public/Style.css";

export default function Items({ items, onAdd }) {
  return (
    <main>
      {items.map((product) => (
        <Product key={product.id} item={product} onAdd={onAdd} />
      ))}
    </main>
  );
}
