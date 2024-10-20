import React from "react";
import Card from "../card/Card";
import products from "../../data";

const Products = ({ addToCart }) => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-6">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <Card item={item} key={item.id} addToCart={addToCart} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
