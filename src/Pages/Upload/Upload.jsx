import axios from "axios";
import "./upload.scss";
import { useState } from "react";
import React from "react";

export default function Upload() {
	const img =
		"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy8MaB9SJmRK4EYAsjEHLx8c4FuM-fb4_miA&s";
	const [errorMessage, setErrorMessage] = useState("");
	const [formData, setFormData] = useState({
		productName: "",
		price: "",
		quantitySold: "",
		ManageStockId: "",
		description: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setErrorMessage("");
		try {
			await axios.post(
				"https://tycoon-electronics-fd012c83f120.herokuapp.com/tycoon",
				formData
			);
			alert("Product uploaded successfully!");
			setFormData({
				productName: "",
				price: "",
				quantitySold: "",
				ManageStockId: "",
				description: "",
			});
		} catch (error) {
			setErrorMessage("Failed to upload. Please try again.");
		}
	};

	// Input validation function
	const validateInputs = () => {
		if (!formData.productName.trim()) {
			setErrorMessage("Product name is required.");
			return false;
		}
		if (
			!formData.price ||
			isNaN(formData.price) ||
			Number(formData.price) <= 0
		) {
			setErrorMessage("Enter a valid price.");
			return false;
		}
		if (
			!formData.quantitySold ||
			isNaN(formData.quantitySold) ||
			Number(formData.quantitySold) < 0
		) {
			setErrorMessage("Enter a valid quantity sold.");
			return false;
		}
		if (
			!formData.ManageStockId ||
			isNaN(formData.ManageStockId) ||
			Number(formData.ManageStockId) <= 0
		) {
			setErrorMessage("Enter a valid stock reference number.");
			return false;
		}
		if (!formData.description.trim()) {
			setErrorMessage("Product description is required.");
			return false;
		}
		return true;
	};

	return (
		<div className='uploadContainer'>
			<img src={img} alt='logo' />
			<h1>This Week Sales</h1>

			<form
				className='uploadImage'
				onSubmit={async (e) => {
					e.preventDefault();
					setErrorMessage("");
					if (!validateInputs()) return;
					await handleSubmit(e);
					setFormData({
						productName: "",
						price: "",
						quantitySold: "",
						ManageStockId: "",
						description: "",
					});
				}}
			>
				<div className='uploadInputs'>
					<input
						type='text'
						placeholder='Product Name.. '
						name='productName'
						value={formData.productName}
						onChange={handleChange}
						required
					/>
					<input
						type='number'
						placeholder='Product Price'
						name='price'
						value={formData.price}
						onChange={handleChange}
						required
					/>
					<input
						type='number'
						placeholder='Quantity Sold'
						name='quantitySold'
						value={formData.quantitySold}
						onChange={handleChange}
						required
					/>
					<input
						type='number'
						placeholder='Stock Reference Number'
						name='ManageStockId'
						value={formData.ManageStockId}
						onChange={handleChange}
						required
					/>
					<textarea
						placeholder='Product Description'
						name='description'
						value={formData.description}
						onChange={handleChange}
						required
					></textarea>

					{errorMessage && <span className='error'>{errorMessage}</span>}
					<button type='submit'>Upload</button>
				</div>
			</form>
		</div>
	);
}
