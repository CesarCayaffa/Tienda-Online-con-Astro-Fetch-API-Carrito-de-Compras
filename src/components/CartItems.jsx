import React from "react";
import { useCartStore } from "../stores/cartStore";

const CartItems = () => {
  const cart = useCartStore((state) => state.cart);
  const addToCart = useCartStore((state) => state.addToCart);
  const removeOneFromCart = useCartStore((state) => state.removeOneFromCart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

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
            <div className="flex justify-between items-center gap-2 mt-2 border-2 border-gray-300 rounded-3xl max-w-[160px]">
              <button
                onClick={() => removeOneFromCart(item.id)}
                className="px-2 font-black text-red-600"
              >
                -
              </button>
              <p className="text-gray-600">Cantidad: {item.quantity}</p>

              <button
                onClick={() => addToCart({ ...item, quantity: 1 })}
                className="px-2 font-black text-green-600"
              >
                +
              </button>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-gray-500 text-white px-2 py-1 rounded hover:bg-gray-600 transition"
              >
                Eliminar
              </button>
            </div>
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
