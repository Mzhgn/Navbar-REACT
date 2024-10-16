import React from "react";
import Product from "./Product/Product";
import "./App.css";
function App() {
  return (
    <div className="container">
      <Product name="Honor 8" image="honor.png" price={120} />
      <Product name="iPhone 15 Pro" image="iphone.png" price={700} />
      <Product name="Samsung Fold" image="samsung.png" price={540} />
    </div>
  );
}

export default App;
