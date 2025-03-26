import React from "react";
import { useCartStore } from "../stores/cartStore";

const AddToCartButton = ({ product }) => {
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: 1,
    });
  };

  return (
    <button
      onClick={handleAddToCart}
      className="bg-black text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2 hover:scale-110 transition duration-300"
      >
      <span>Agregar al carrito</span>
    </button>
  );
};

export default AddToCartButton;