import React, { useState } from 'react';
import CartItem from '../components/CartItem';

const initialCart = [
  { id: 1, name: 'Product 1', quantity: 2, price: 29.99 },
  { id: 2, name: 'Product 2', quantity: 1, price: 39.99 },
  // Add more cart items as needed
];

const CartPage: React.FC = () => {
  const [cart, setCart] = useState(initialCart);

  const handleRemove = (id: number) => {
    setCart(cart.filter(item => item.id !== id));
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Cart</h2>
      {cart.map(item => (
        <CartItem key={item.id} item={item} onRemove={handleRemove} />
      ))}
    </div>
  );
}

export default CartPage;
