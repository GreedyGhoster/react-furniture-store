import "/public/Style.css";
import React from "react";

export default function ShowAboutItem({ item, onAdd, onShowItem }) {
  return (
    <div className="full-item">
      <div>
        <img src={"./img/" + item.img} onClick={() => onShowItem(item)} />
        <h2>{item.title}</h2>
        <p>{item.desc}</p>
        <b>{item.price}$</b>
        <div className="add-to-cart" onClick={() => onAdd(item)}>
          +
        </div>
      </div>
    </div>
  );
}
