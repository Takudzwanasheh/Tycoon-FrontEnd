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
				<CloseIcon style={{ fontSize: "3rem" }} onClick={handleCloseMenu} />
				<h1>Menu</h1>
			</div>
			<ul className='menu-list'>
				<li className='menu-item dropdown'>
					<a>SPECIALS</a>
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
				<a href='#' className='menu-item'>
					<Link to={"/products"}>ALL PRODUCTS</Link>
				</a>
				<a href='#' className='menu-item'>
					<Link to={"/login"}>SECRET SALE</Link>
				</a>
				<a href='#' className='menu-item'>
					<Link to={"/social-comments"}>SOCIAL COMMENTS </Link>
				</a>

				<a href='/#' className='menu-item'>
					<Link to={"about"}>COUNTRY OF ORIGIN</Link>
				</a>

				<a href='#' className='menu-item'>
					<Link to={"delivery"}>DELIVERY RATE</Link>
				</a>
				<a href='#' className='menu-item'>
					<Link>PRODUCT TYPES</Link>
				</a>
				<a href='#' className='menu-item'>
					<Link to={"/"}>PRODUCTS BY COUNTRY</Link>
				</a>
			</ul>
		</div>
	);
}
