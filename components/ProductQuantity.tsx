'use client';

import { useState } from 'react';
import { FiMinus, FiPlus } from 'react-icons/fi';

const ProductQuantity = () => {
  const [quantity, setQuantity] = useState<number>(1);

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity === 1) {
      setQuantity(1);
    } else {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <div className="flex justify-around">
      <button
        onClick={decreaseQuantity}
        className={quantity === 1 ? 'text-brand-black/20' : ''}
      >
        <FiMinus />
      </button>

      <p>{quantity}</p>

      <button onClick={increaseQuantity}>
        <FiPlus />
      </button>
    </div>
  );
};

export default ProductQuantity;
