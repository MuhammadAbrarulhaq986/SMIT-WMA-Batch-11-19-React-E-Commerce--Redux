import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom"; // Add this import

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <nav className="flex justify-between items-center h-24 max-w-md mx-auto p-4 text-white bg-black">
      <h1 className="text-3xl font-bold">Product App</h1>
      <div className="flex items-center">
        <h2 className="text-lg">
          <Link to="/cart">Cart</Link>{" "}
          {/* Use Link component instead of a tag */}
        </h2>
        <span className="text-lg ml-2">{cartItems.length}</span>
      </div>
    </nav>
  );
};

export default Navbar;
