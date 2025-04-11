import "./App.css";
import About from "./Components/About/About";
import ProductCard from "./Components/Card/ProductCard";
import { Route, BrowserRouter, Router, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";

import Navbar from "./Components/NavBar/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar />

      <About />
      <ProductCard />
      <Footer />
    </div>
  );
}

export default App;
