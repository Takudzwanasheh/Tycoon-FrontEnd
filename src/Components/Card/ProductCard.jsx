import "./card.scss";
import products from "./Card";
import { Link } from "react-router-dom";

export default function ProductCard() {
  const ProductCard = ({ product }) => {
    return (
      <div className="card">
        <div className="card-image-container">
          <img src={product.image} alt={product.name} className="card-image" />
          <button className="cardButton">
            <Link to={"/cart"}>QUICK BUY</Link>
          </button>
        </div>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p>{product.price}</p>
      </div>
    );
  };

  return (
    <div>
      <div className="card-section-container">
        <div className="card-container">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
