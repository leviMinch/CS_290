import React, { useState } from 'react';
import { MdAdd, MdHorizontalRule  } from "react-icons/md";

function SelectQuantity({ id }) {
  const [quantity, setQuantity] = useState(0);

  const increment = () => {
    if (quantity < 10) {
      setQuantity(prevQuantity => prevQuantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 0) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  return (
    <div>
      <button onClick={decrement} className = "quant"><MdHorizontalRule  /></button>
      {quantity}
      <button onClick={increment} className = "quant"><MdAdd /></button>
    </div>
  );
}

export default SelectQuantity;