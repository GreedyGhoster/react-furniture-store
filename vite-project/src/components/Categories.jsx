import "/public/Style.css";
import React from "react";
import { useState } from "react";

export default function Categories({ chooseCategory }) {
  const [categories] = useState([
    { key: "all", name: "Все" },
    { key: "chairs", name: "Стулья" },
    { key: "tables", name: "Столы" },
    { key: "sofa", name: "Диваны" },
    { key: "light", name: "Лампы" },
    { key: "wardrobe", name: "Шкафы" },
  ]);
  return (
    <div className="categories">
      {categories.map((obj) => (
        <div key={obj.key} onClick={() => chooseCategory(obj.key)}>
          {obj.name}
        </div>
      ))}
    </div>
  );
}
