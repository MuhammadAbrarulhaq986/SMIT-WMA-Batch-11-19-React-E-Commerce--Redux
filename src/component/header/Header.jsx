import React from "react";

const Header = ({ size, setShow }) => {
  return (
    <div className="bg-black text-white p-2 flex justify-between items-center shadow-lg h-16">
      <div
        className="container mx-auto max-w-lg flex items-center cursor-pointer"
        onClick={() => setShow(true)}
      >
        <h6 className="font-medium text-lg p-1 m-1 font-sans">Shopping Cart</h6>
      </div>

      <div
        className="flex justify-end items-center"
        onClick={() => setShow(false)}
      >
        <div className="mr-2 cursor-pointer">
          {/* Replace Material UI icon with a simple SVG shopping cart icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="text-white w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 6h14l-1.68 9.39A2 2 0 0119 18H9a2 2 0 01-1.96-1.61L5.1 6H3M7 6l-1-3m0 0H1m6 0h14"
            />
          </svg>
        </div>
        <span className="font-medium text-lg ml-2 font-sans">
          <span className="count">{size}</span>
        </span>
      </div>
    </div>
  );
};

export default Header;
