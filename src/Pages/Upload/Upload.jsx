import axios from "axios";
import "./upload.scss";
import { useState } from "react";

export default function Upload() {
	const [formData, setFormData] = useState({
		StonePicture: "",
		StoneName: "",
		description: "",
		price: "",
	});

	const handleInputChange = (e) => {
		const { name, value, type, files } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: type === "file" ? files[0] : value,
		}));
	};

	const [errorMessage, setErrorMessage] = useState("");

	return (
		<div className='uploadContainer'>
			<h1>Admin</h1>
			<h1>Add New Product</h1>

			<form
				className='uploadImage'
				onSubmit={(e) => {
					e.preventDefault();
					if (
						!formData.StonePicture ||
						!formData.StoneName ||
						!formData.description ||
						!formData.price ||
						isNaN(formData.price)
					) {
						setErrorMessage("Please fill all fields correctly.");
						return;
					}
					setErrorMessage("");
					axios.post("http://localhost:3001/vennis", formData).then(() => {
						console.log("data uploaded successfully");
						setFormData({
							StonePicture: null,
							StoneName: "",
							description: "",
							price: "",
						});
					});
				}}
			>
				<div className='uploadInputs'>
					<input
						type='text'
						placeholder='Image URL.. '
						name='StonePicture'
						onChange={handleInputChange}
					/>
					<input
						type='text'
						placeholder='Stone Name'
						name='StoneName'
						value={formData.StoneName}
						onChange={handleInputChange}
					/>
					<textarea
						placeholder='Stone Description'
						name='description'
						value={formData.description}
						onChange={handleInputChange}
					></textarea>
					<input
						type='money'
						placeholder='Price'
						name='price'
						value={formData.price}
						onChange={handleInputChange}
					/>
					{errorMessage && <span className='error'>{errorMessage}</span>}
					<button type='submit'>Upload</button>
				</div>
			</form>
		</div>
	);
}
