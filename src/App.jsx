import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCartItem } from "./config/redux/reducers/cartSlice";
import Navbar from "./component/Navbar";

const App = () => {
  const [products, setProducts] = useState(null);
  const [showDetails, setShowDetails] = useState({});

  // selector
  const cartItems = useSelector((state) => state.cart.cartItems);
  console.log(cartItems);

  // dispatch
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => {
        setProducts(res.products);
      })
      .catch((err) => console.log(err));
  }, []);

  const addToCart = (item) => {
    dispatch(
      addCartItem({
        item,
      })
    );
  };

  const handleShowDetails = (item) => {
    setShowDetails((prevShowDetails) => ({
      ...prevShowDetails,
      [item.id]: !prevShowDetails[item.id],
    }));
  };

  const apiUrl = import.meta.env.VITE_API_URL;
  const appName = import.meta.env.VITE_APP_NAME;
  const username = import.meta.env.VITE_USERNAME;
  const age = import.meta.env.VITE_AGE;

  console.log("API URL:", apiUrl);
  console.log("App Name:", appName);
  console.log("App Name:", username);
  console.log("App Name:", age);

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        {products ? (
          products.map((item) => {
            return (
              <div
                className="flex flex-col p-4 border border-black rounded-lg m-4"
                key={item.id}
              >
                <img
                  className="w-48 h-48 object-cover rounded-lg"
                  src={item.thumbnail}
                  alt="productImg"
                />
                <h2 className="text-lg">{item.title.slice(0, 10) + "..."}</h2>
                <h1 className="text-2xl">{item.price}</h1>
                <button
                  className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => addToCart(item)}
                >
                  Add to cart
                </button>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
                  onClick={() => handleShowDetails(item)}
                >
                  {showDetails[item.id] ? "Hide Details" : "Show Details"}
                </button>
                {showDetails[item.id] && (
                  <div className="mt-4">
                    <h2 className="text-lg">Description:</h2>
                    <p className="text-md">{item.description}</p>
                    <h2 className="text-lg">Category:</h2>
                    <p className="text-md">{item.category}</p>
                    <h2 className="text-lg">Brand:</h2>
                    <p className="text-md">{item.brand}</p>
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <p className="text-lg">Item not found</p>
        )}
      </div>
    </>
  );
};

export default App;
