import React, { useState } from "react";
import "./navbar.scss";
import Menu from "../Menu/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import { Instagram, Facebook, X, YouTube } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);
	const img =
		"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy8MaB9SJmRK4EYAsjEHLx8c4FuM-fb4_miA&s";
	return (
		<header className='navbar'>
			<div className='navbar-logo'>
				<MenuIcon className='menuIcon' onClick={() => setMenuOpen(!menuOpen)} />
				<img src={img} alt='Logo' />
				<h1>
					<NavLink to='/'>TYCOON ELECTRONICS</NavLink>
				</h1>
			</div>
			<div className='navbar-links'>
				<div className='socials'>
					<ul>
						<li>
							<a
								href='https://www.instagram.com/toprockgemstones'
								target='_blank'
								rel='noopener noreferrer'
							>
								<Instagram />
							</a>
						</li>
						<li>
							<a
								href='https://www.facebook.com'
								target='_blank'
								rel='noopener noreferrer'
							>
								<Facebook />
							</a>
						</li>
						<li>
							<a
								href='https://x.com/i/flow/login?redirect_after_login=%2FtoprockgemsZA'
								target='_blank'
								rel='noopener noreferrer'
							>
								<X />
							</a>
						</li>
						<li>
							<a
								href='https://www.youtube.com/results?search_query=toprock+gemstones'
								target='_blank'
								rel='noopener noreferrer'
							>
								<YouTube />
							</a>
						</li>
					</ul>
				</div>
			</div>
			{menuOpen && <Menu className='menu' />}
		</header>
	);
}
