import "./App.css";
import About from "./Components/About/About";
import ProductCard from "./Components/Card/ProductCard";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import RecipeReviewCard from "./Pages/Register/Register";
import Home from "./Pages/Home/Home";
import Navbar from "./Components/NavBar/Navbar";
import Login from "./Pages/Login/Login";
import NewProducts from "./Pages/NewProducts/NewProducts";
function App() {
  const Layout = () => {
    return (
      <div className="appLayout">
        <Navbar />
        <Outlet />

        <Footer />
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/products", element: <ProductCard /> },
        { path: "/new-products", element: <NewProducts /> },
        { path: "/about", element: <About /> },
      ],
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <RecipeReviewCard />,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
