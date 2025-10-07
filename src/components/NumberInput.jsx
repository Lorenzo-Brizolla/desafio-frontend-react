import { useState } from "react";
import MinusImage from "../assets/Minus.svg";
import PlusImage from "../assets/Plus.svg";

export default function NumberInput({ onChange, initial = 1, min = 1, max = 99, onZero }) {
  const [value, setValue] = useState(initial);

  function diminuir() {
    const newValue = value - 1;
    if (newValue >= min) {
      setValue(newValue);
      onChange?.(newValue);
    } else if (newValue < min && onZero) {
      onZero();
    }
  }

  function aumentar() {
    if (value < max) {
      const newValue = value + 1;
      setValue(newValue);
      onChange?.(newValue);
    }
  }

  return (
    <section className="product__quantity">
      <button type="button" className="product__quantityMinus" onClick={diminuir}>
        <img src={MinusImage} alt="Diminuir" />
      </button>
      <input
        type="text"
        className="product__quantityInput"
        value={value}
        readOnly
      />
      <button type="button" className="product__quantityPlus" onClick={aumentar}>
        <img src={PlusImage} alt="Aumentar" />
      </button>
    </section>
  );
}
