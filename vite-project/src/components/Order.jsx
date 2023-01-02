import React from "react";
import "/public/Style.css";
import { FaTrash } from "react-icons/fa";

export default function Order({ item, onDelete }) {
  return (
    <div className="item">
      <img src={"./img/" + item.img} alt="" />
      <h2>{item.title}</h2>
      <b>{item.price}$</b>
      <FaTrash className="delete-button" onClick={() => onDelete(item.id)} />
    </div>
  );
}
