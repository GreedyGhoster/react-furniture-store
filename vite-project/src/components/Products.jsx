import React from "react";
import Product from "./Product";
import "/public/Style.css";

export default function Items({ items, onAdd, onShowItem }) {
  return (
    <main>
      {items.map((product) => (
        <Product
          onShowItem={onShowItem}
          key={product.id}
          item={product}
          onAdd={onAdd}
        />
      ))}
    </main>
  );
}
