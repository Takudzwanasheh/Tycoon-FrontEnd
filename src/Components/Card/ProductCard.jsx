import "./card.scss";
import products from "./Card";

export default function ProductCard() {
  const ProductCard = ({ product }) => {
    return (
      <div className="card">
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p>{product.price}</p>
        <button>Add to </button>
        <button>Details</button>
      </div>
    );
  };

  return (
    <div>
      <div className="card-section-container">
        <a href="/">Home</a>
        <div className="card-container">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
