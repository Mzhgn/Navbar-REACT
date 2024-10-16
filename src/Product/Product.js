import "./Product.css";

function Product(props) {
  return (
    <div>
      <h2>iphone</h2>
      <div className="card">
        <img src={props.image} alt="product" />
        <h1>{props.name}</h1>
        <p className="price">${props.price}</p>
        <p>
          <button>Add to Cart</button>
        </p>
      </div>
    </div>
  );
}

export default Product;
