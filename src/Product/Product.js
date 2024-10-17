import "./Product.css";

function Product({ name, image, price, children }) {
  return (
    <div>
      <h2>iphone</h2>
      <div className="card">
        <img src={image} alt="product" />
        <h1>{name}</h1>
        <p className="price">${price}</p>
        {children}
        <p>
          <button>Add to Cart</button>
        </p>
      </div>
    </div>
  );
}

export default Product;
