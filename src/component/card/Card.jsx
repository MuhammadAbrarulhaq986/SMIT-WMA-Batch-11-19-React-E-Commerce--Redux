import React from "react";

const Card = ({ item, addToCart }) => {
  const { id, title, description, category, price, image } = item;
  return (
    <>
      <div className="bg-black shadow-lg rounded-lg overflow-hidden">
        <div className="container p-4" key={id}>
          <img
            src={image}
            alt={title}
            className="w-full h-61 object-cover mb-4 rounded"
          />{" "}
          {/* Increased image height */}
          <p className="text-white text-sm mb-2">{category}</p>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-white mb-4 line-clamp-3">{description}</p>{" "}
          {/* Added line-clamp */}
          <p className="text-lg font-bold text-white mb-4">${price}</p>
          <button
            onClick={() => addToCart(item)}
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-200"
          >
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
