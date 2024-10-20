import React, { useEffect, useState } from "react";

const Cart = ({ cart, setCart }) => {
  const [price, setPrice] = useState(0);

  // Function to calculate total price
  const handlePrice = () => {
    let totalAmount = 0;
    cart.forEach((item) => {
      const amount = Number(item.amount);
      const itemPrice = Number(item.price);
      if (!isNaN(amount) && !isNaN(itemPrice)) {
        totalAmount += amount * itemPrice;
      }
    });
    setPrice(totalAmount);
  };

  useEffect(() => {
    handlePrice();
  }, [cart]);

  // Function to handle quantity change
  const handleProductQuantity = (item, change) => {
    setCart((prevCart) => {
      return prevCart.map((cartItem) => {
        if (cartItem.id === item.id) {
          const newAmount = cartItem.amount + change;
          return {
            ...cartItem,
            amount: newAmount < 0 ? 0 : newAmount, // Prevent negative quantities
          };
        }
        return cartItem;
      });
    });
  };

  // Function to remove a product from the cart
  const removeProduct = (id) => {
    const newList = cart.filter((item) => item.id !== id);
    setCart(newList);
  };

  return (
    <div className="cart max-w-5xl mx-auto p-6 bg-gray-50 rounded-lg shadow-lg">
      {cart.length === 0 ? (
        <p className="text-center text-lg font-semibold text-gray-600">
          No Products in the cart
        </p>
      ) : (
        cart.map((item) => (
          <div
            className="cart-box flex justify-between items-center p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm"
            key={item.id}
          >
            <div className="cart-img w-1/4">
              <img
                src={item.image}
                className="cart-image w-full h-32 object-cover rounded-lg"
                alt={item.title}
              />
              <p className="cart-title text-lg font-semibold mt-2 text-center">
                {item.title}
              </p>
            </div>
            <div className="quantity-controls flex items-center justify-center w-1/4">
              <button
                onClick={() => handleProductQuantity(item, +1)}
                className="increase-button bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-200"
              >
                +
              </button>
              <button className="quantity-display text-2xl font-bold mx-4">
                {item.amount}
              </button>
              <button
                onClick={() => handleProductQuantity(item, -1)}
                className="decrease-button bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-200"
              >
                -
              </button>
            </div>
            <div className="price-controls flex items-center justify-center w-1/4">
              <span className="item-price text-lg font-semibold text-gray-800">
                ${item.price}
              </span>
              <button
                onClick={() => removeProduct(item.id)}
                className="remove-button bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full transition duration-200 ml-4"
              >
                Remove
              </button>
            </div>
            <div className="total w-1/4 text-right">
              <span className="total-price text-lg font-semibold text-gray-800">
                Total: ${price.toFixed(2)}
              </span>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
