import "./newproducts.scss";
import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export default function NewProducts() {
	const [listOfStones, setListOfStones] = useState([]);

	useEffect(() => {
		axios.get("http://localhost:3001/vennis").then((response) => {
			setListOfStones(response.data);
		});
	}, []);

	return (
		<div>
			<div className='card-section-container'>
				<div className='card-container'>
					{listOfStones.map((value, key) => {
						return (
							<div key={value.id} className='card'>
								<div className='image-container'>
									<img
										src={value.StonePicture}
										alt={value.StoneName}
										className='zoomable-image'
									/>
									<button className='cardButton'>QUICK BUY</button>
								</div>
								<h3>{value.StoneName}</h3>
								<p>{value.description} </p>
								<p>Price ${value.price}</p>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
