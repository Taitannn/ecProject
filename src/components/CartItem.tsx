import React from 'react';

interface CartItemProps {
  item: {
    id: number;
    name: string;
    quantity: number;
    price: number;
  };
  onRemove: (id: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ item, onRemove }) => {
  return (
    <div className="border p-4 m-2 flex justify-between items-center">
      <div>
        <h2 className="text-xl font-bold">{item.name}</h2>
        <p>Quantity: {item.quantity}</p>
        <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
      </div>
      <button onClick={() => onRemove(item.id)} className="bg-red-500 text-white px-4 py-2">Remove</button>
    </div>
  );
}

export default CartItem;
