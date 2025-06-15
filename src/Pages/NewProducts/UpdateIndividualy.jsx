import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function UpdateIndividualy() {
	const { id } = useParams();
	const [product, setProduct] = useState(null);

	useEffect(() => {
		axios
			.get(`https://tycoon-electronics-fd012c83f120.herokuapp.com/stock/${id}`)
			.then((response) => {
				setProduct(response.data);
			});
	}, [id]);

	const [Quantity, setQuantity] = useState(0);

	const handleUpdate = async (e) => {
		e.preventDefault();
		try {
			await axios.put(
				`https://tycoon-electronics-fd012c83f120.herokuapp.com/stock/${id}`,
				{
					Quantity,
				}
			);
			alert("Stock updated successfully!");
			setProduct(0);
			const response = await axios.get(
				`https://tycoon-electronics-fd012c83f120.herokuapp.com/stock/${id}`
			);
			setProduct(response.data);
		} catch (error) {
			console.error(error);
			alert("Failed to update stock");
		}
	};

	return (
		<div>
			<div className='updateStock'>
				<h1>Update-Stock</h1>
				<input
					type='number'
					placeholder='Quantity'
					onChange={(e) => setQuantity(Number(e.target.value))}
				/>
				<button onClick={handleUpdate}>Update</button>
			</div>
			<table>
				<thead>
					<tr>
						<th>Product Name</th>
						<th>Quantity</th>
					</tr>
				</thead>
				<tbody>
					{product ? (
						<tr>
							<td>{product.productName}</td>
							<td>{product.Quantity}</td>
						</tr>
					) : (
						<tr>
							<td colSpan='2'>Loading...</td>
						</tr>
					)}
				</tbody>
			</table>
		</div>
	);
}
