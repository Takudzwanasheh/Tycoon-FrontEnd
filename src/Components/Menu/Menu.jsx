import { Link } from "react-router-dom";
import "./menu.scss";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

export default function Menu() {
	const [isMenuOpen, setIsMenuOpen] = useState(true);

	const handleCloseMenu = () => {
		setIsMenuOpen(false);
	};

	if (!isMenuOpen) {
		return null;
	}

	return (
		<div className='menu'>
			<div className='menu-header'>
				<h1>Menu</h1>
				<CloseIcon style={{ fontSize: "2.5rem" }} onClick={handleCloseMenu} />
			</div>
			<ul className='menu-list'>
				<li className='menu-item dropdown'>
					<ul className='dropdown-menu'>
						<li>
							<Link to={"delivery"}>AGATE</Link>
						</li>
						<li>
							<Link to={"product-types"}>AEGIRINE</Link>
						</li>
						<li>
							<Link to={"/"}>AMETHYST</Link>
						</li>
					</ul>
				</li>
				<li>
					<Link to={"/products"}>ALL PRODUCTS</Link>
				</li>
				<li>
					<Link to={"/login"}>SECRET SALE</Link>
				</li>
				<li>
					<Link to={"/social-comments"}>SOCIAL COMMENTS </Link>
				</li>
				<li>
					<Link to={"about"}>COUNTRY OF ORIGIN</Link>
				</li>
				<li>
					<Link to={"delivery"}>DELIVERY RATE</Link>
				</li>
				<li>
					<Link>PRODUCT TYPES</Link>
				</li>
				<li>
					<Link to={"/"}>PRODUCTS BY COUNTRY</Link>
				</li>
			</ul>
		</div>
	);
}
