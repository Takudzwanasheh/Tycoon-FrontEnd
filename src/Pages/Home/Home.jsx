import "./home.scss";
import NewProducts from "../NewProducts/NewProducts";

export default function Home() {
  return (
    <div className="homePage">
      <div className="homeContainer">
        <h1>Welcome to Vennis Resources</h1>
        <h2>Featured Products</h2>
        <p>Check out our latest and most popular products.</p>
      </div>
      <NewProducts />
      <p>Your one-stop solution for all your resource needs.</p>
      <p>Explore our products and services to find what suits you best.</p>
    </div>
  );
}
