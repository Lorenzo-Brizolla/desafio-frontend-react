import { useState } from "react";
import MinusImage from "../assets/Minus.svg";
import PlusImage from "../assets/Plus.svg";

export default function NumberInput({ onChange, initial = 1 }) {
  const [value, setValue] = useState(initial);

  function diminuir() {
    if (value > 1) {
      setValue(value - 1);
      onChange?.(value - 1);
    }
  }

  function aumentar() {
    if (value < 99) {
      setValue(value + 1);
      onChange?.(value + 1);
    }
  }

  return (
    <section className="product__quantity">
      <button type="button" className="product__quantity--minus" onClick={diminuir}>
        <img src={MinusImage} alt="Diminuir" />
      </button>
      <input
        type="text"
        className="product__quantity--input"
        value={value}
        readOnly
      />
      <button type="button" className="product__quantity--plus" onClick={aumentar}>
        <img src={PlusImage} alt="Aumentar" />
      </button>
    </section>
  );
}
