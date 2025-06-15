import "./App.css";
import About from "./Components/About/About";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navbar from "./Components/NavBar/Navbar";
import Login from "./Pages/Login/Login";
import NewProducts from "./Pages/NewProducts/NewProducts";
import Upload from "./Pages/Upload/Upload";
import Register from "./Pages/Register/Register";
import Available from "./Pages/NewProducts/Available-Stock";
import Menu from "./Components/Menu/Menu";
import UpdateStock from "./Pages/Upload/UpdateStock";
import UpdateIndividualy from "./Pages/NewProducts/UpdateIndividualy";
function App() {
	const Layout = () => {
		return (
			<div className='appLayout'>
				<div style={{ position: "sticky", top: 0, zIndex: 1000 }}>
					<Navbar />
				</div>
				<Outlet />
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
				{ path: "/tycoon-sales", element: <NewProducts /> },
				{ path: "/about", element: <About /> },
				{ path: "/stock", element: <Available /> },
				{ path: "/update-stock", element: <UpdateStock /> },
				{ path: "/byid/:id", element: <UpdateIndividualy /> },
			],
		},
		{
			path: "/about",
			element: <About />,
		},
		{
			path: "/stock",
			element: <Available />,
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
			path: "/menu",
			element: <Menu />,
		},
	]);

	return (
		<div className='App'>
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
