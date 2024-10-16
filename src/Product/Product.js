import "./Product.css";

function Product() {
  return (
    <div>
      <h2>Product Card</h2>
      <div className="card">
        <img src="samsung.png" alt="product" />
        <h1>Samsung A51</h1>
        <p className="price">$300</p>
        <p>It is the best smart phone in 2021, made in Korea</p>
        <p>
          <button>Add to Cart</button>
        </p>
      </div>
    </div>
  );
}

export default Product;
