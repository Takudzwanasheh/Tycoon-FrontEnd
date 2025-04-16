import "./newproducts.scss";
import new_products from "./Product";
import React from "react";
export default function NewProducts() {
  const NewProductCard = ({ product }) => {
    const [isExpanded, setIsExpanded] = React.useState(false);

    const toggleReadMore = () => {
      setIsExpanded(!isExpanded);
    };

    return (
      <div className="card">
        <div className="image-container">
          <img
            src={product.image}
            alt={product.name}
            className="zoomable-image"
          />
        </div>
        <h3>{product.name}</h3>
        <p>{product.description} </p>
        <p>{product.price}</p>
      </div>
    );
  };

  return (
    <div>
      <div className="card-section-container">
        <div className="card-container">
          {new_products.map((product) => (
            <NewProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
