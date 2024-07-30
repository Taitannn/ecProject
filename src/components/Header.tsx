import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 p-4 text-white flex justify-between items-center">
      <h1 className="text-xl">ECサイト</h1>
      <nav>
        <Link to="/" className="mr-4">Home</Link>
        <Link to="/products" className="mr-4">Products</Link>
        <Link to="/cart" className="mr-4">Cart</Link>
        <Link to="/login" className="mr-4">Login</Link>
        <Link to="/register">Register</Link>
      </nav>
    </header>
  );
}

export default Header;
