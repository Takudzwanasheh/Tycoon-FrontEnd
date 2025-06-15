import "./home.scss";
import NewProducts from "../NewProducts/NewProducts";
import { NavLink } from "react-router-dom";

export default function Home() {
	return (
		<div className='homePage'>
			<div className='homeContainer'>
				<h1>WELCOME TO TYCOON-ELECTRONICS</h1>
				<p>SALES PAGE</p>
				<div>
					<NavLink to={"/update-stock"}>
						<button>Update-Stock</button>
					</NavLink>
					<NavLink to={"/tycoon-sales"}>
						<button>View-Sales</button>
					</NavLink>
					<NavLink to={"/add-product"}>
						<button>New-Sales</button>
					</NavLink>
					<NavLink to={"/stock"}>
						<button>Check Stock</button>
					</NavLink>
				</div>
			</div>
			<p>Lets Respect the Business We will get there Eventuallly </p>
			<NewProducts />
		</div>
	);
}
