import { useState } from "react";
import Footer from "../Footer/Footer";
import "./About.scss";
import axios from "axios";

export default function About() {
	const [email, setEmail] = useState("");
	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	};

	return (
		<div className='aboutContainer'>
			<div className='aboutSection'>
				<div className='leftSection'>
					<h1>Vennis-Resources</h1>
					<span>About-us</span>
				</div>
				<div className='rightSection'>
					<p>
						Welcome to Vennis-Resources, where nature's artistry meets timeless
						elegance. We specialize in sourcing and crafting unique,
						high-quality stones that enhance the beauty of any space. Our
						collection features a diverse range of natural stones, including
						marble, granite, quartz, and rare gemstones, each with its own
						distinct character and charm.
						<br /> <br />
						At Vennis-Resources, we are passionate about sustainability and
						ethical sourcing. We work closely with local artisans and suppliers
						to ensure that our stones are responsibly mined and processed. Our
						commitment to quality means that every piece is meticulously
						inspected and crafted to meet the highest standards.
						<br /> <br />
						Whether you're an architect, designer, or homeowner, we provide
						personalized service to help you find the perfect stone for your
						project. From stunning countertops to breathtaking flooring, our
						stones will add a touch of luxury and sophistication to any
						environment.
						<br /> <br />
						Explore our collection and discover the beauty of nature's finest
						creations. At Vennis-Resources, we believe that every stone tells a
						story—let us help you tell yours.
					</p>
				</div>
			</div>

			<div className='newsSection'>
				<h1>Subscribe to our newsletter</h1>
				<p>
					We use our mailing list to update you of specials, interesting
					information, operational matters and any possible plans for taking
					over the world!
				</p>
				<form
					onSubmit={(data) => {
						data.preventDefault();
						if (!email) {
							alert("Please enter a valid email address.");
							return;
						}
						axios.post("http://localhost:3001/email", { email }).then(() => {
							alert("Thank you for subscribing!");
							setEmail("");
						});
					}}
					className='Subscribe'
				>
					<input
						name='email'
						type='email'
						placeholder='Your-Email @gmail.com'
						value={email}
						onChange={handleEmailChange}
					/>
					<button type='submit'>Subscribe</button>
				</form>
			</div>
		</div>
	);
}
