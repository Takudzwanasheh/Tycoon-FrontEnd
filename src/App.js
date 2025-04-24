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
import Upload from "./Pages/Upload/Upload";
import Register from "./Pages/Register/Register";
import Menu from "./Components/Menu/Menu";
import Error from "./Pages/Errors/Error";
function App() {
	const Layout = () => {
		return (
			<div className='appLayout'>
				<div style={{ position: "sticky", top: 0, zIndex: 1000 }}>
					<Navbar />
				</div>
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
				{ path: "/add-product", element: <Upload /> },
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
			element: <Register />,
		},
		{
			path: "*",
			element: <Error />,
		},
		{
			path: "/menu",
			element: <Menu />,
		},

		{
			path: "/register",
			element: <RecipeReviewCard />,
		},
	]);

	return (
		<div className='App'>
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
