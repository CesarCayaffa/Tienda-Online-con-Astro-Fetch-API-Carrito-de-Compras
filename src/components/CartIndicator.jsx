import React from "react";
import { useCartStore } from "../stores/cartStore";


const CartIndicator = () => {
  const cart = useCartStore((state) => state.cart) || [];

  const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 0), 0);

  return (
    <span >
      <span>{totalItems}</span>
    </span>
  );
};

export default CartIndicator;
