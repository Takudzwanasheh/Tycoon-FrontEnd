import "./newproducts.scss";
import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export default function NewProducts() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		axios
			.get("https://tycoon-electronics-fd012c83f120.herokuapp.com/tycoon")
			.then((response) => {
				setProducts(response.data);
			});
	}, []);

	return (
		<div>
			<table>
				<thead>
					<tr>
						<th>Product Name</th>
						<th>Price $</th>
						<th>Description</th>
						<th>Date</th>
					</tr>
				</thead>
				<tbody>
					{[...products].reverse().map((product, idx) => {
						const dateObj = new Date(product.createdAt);
						const formattedDate = `${dateObj
							.getDate()
							.toString()
							.padStart(2, "0")}/${(dateObj.getMonth() + 1)
							.toString()
							.padStart(2, "0")}/${dateObj.getFullYear()}`;
						return (
							<tr key={idx}>
								<td>{product.productName}</td>
								<td>${product.price}</td>
								<td>{product.description}</td>
								<td>{formattedDate}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}
