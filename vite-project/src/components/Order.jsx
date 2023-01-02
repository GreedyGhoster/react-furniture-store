import React from "react";
import "/public/Style.css";

export default function Order({ item }) {
  return (
    <div className="item">
      <img src={"./img/" + item.img} alt="" />
      <h2>{item.title}</h2>
      <b>{item.price}$</b>
    </div>
  );
}
