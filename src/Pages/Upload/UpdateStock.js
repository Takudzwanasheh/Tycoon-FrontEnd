import axios from "axios";
import "./upload.scss";
import { useState } from "react";
import React from "react";

export default function UpdateStock() {
	const img =
		"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy8MaB9SJmRK4EYAsjEHLx8c4FuM-fb4_miA&s";
	const [errorMessage, setErrorMessage] = useState("");

	return (
		<div className='uploadContainer'>
			<img src={img} alt='logo' />
			<h1>Add New Product</h1>

			<form className='uploadImage'>
				<div className='uploadInputs'>
					<input type='text' placeholder='Product Name.. ' name='StoneName' />
					<input
						type='number'
						placeholder='New Stock Added For The Above Product'
						name='price'
					/>

					{errorMessage && <span className='error'>{errorMessage}</span>}
					<button type='submit'>Upload</button>
				</div>
			</form>
		</div>
	);
}
