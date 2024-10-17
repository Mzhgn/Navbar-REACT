import React from "react";
import Product from "./Product/Product";
import "./App.css";
function App() {
  const allProducts = [
    { id: 1, name: "Honor 8", image: "honor.png", price: 120 },
    { id: 2, name: "iPhone 15 Pro", image: "iphone.png", price: 700 },
    { id: 3, name: "Samsung Fold", image: "samsung.png", price: 540 },
  ];
  console.log({ ...allProducts[0] });
  return (
    <div className="container">
      <Product {...allProducts[0]}>
        <button>OFF 25%</button>
      </Product>
      <Product {...allProducts[1]}>
        <button>OFF 10%</button>
      </Product>
      <Product {...allProducts[2]}>
        <button>OFF 6%</button>
      </Product>
    </div>
  );
}

export default App;
