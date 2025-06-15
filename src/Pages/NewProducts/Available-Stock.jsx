import axios from "axios";
import "./newproducts.scss";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Available() {
	const [products, setProducts] = useState([]);
	const navigate = useNavigate();
	useEffect(() => {
		axios
			.get("https://tycoon-electronics-fd012c83f120.herokuapp.com/stock")
			.then((response) => {
				setProducts(response.data);
			});
	});

	return (
		<div>
			<table>
				<thead>
					<tr>
						<th>Product ID</th>
						<th>Product Name</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>
					{products.map((product, idx) => (
						<tr
							onClick={() => {
								navigate(`/byid/${product.id}`);
							}}
							key={idx}
						>
							<td>{product.id}</td>
							<td>{product.productName}</td>
							<td>{product.Quantity}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
