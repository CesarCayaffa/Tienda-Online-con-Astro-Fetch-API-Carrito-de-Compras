import React from "react";
import { useCartStore } from "../stores/cartStore";

const CartItems = () => {
  const cart = useCartStore((state) => state.cart);

  if (cart.length === 0) {
    return <p className="text-gray-600">El carrito está vacío.</p>;
  }
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="space-y-4">
      {cart.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center bg-white p-4 rounded-lg shadow"
        >
          <div>
            <h2 className="font-bold">{item.title}</h2>
            <p className="text-gray-600">Cantidad: {item.quantity}</p>
          </div>
          <p className="font-bold">${item.price * item.quantity}</p>
        </div>
      ))}
      <div className="flex justify-between items-center bg-gray-200 p-4 rounded-lg shadow mt-4">
        <h2 className="font-bold text-lg">Total:</h2>
        <p className="font-bold text-lg">${total.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default CartItems;
