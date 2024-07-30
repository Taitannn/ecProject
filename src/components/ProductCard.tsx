import React from 'react';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    description: string;
    price: number;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="border p-4 m-2">
      <h2 className="text-xl font-bold">{product.name}</h2>
      <p>{product.description}</p>
      <p>${product.price.toFixed(2)}</p>
      <button className="bg-blue-500 text-white px-4 py-2 mt-2">Add to Cart</button>
    </div>
  );
}

export default ProductCard;
