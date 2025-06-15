import "./register.scss";
import vennis from "./Vennis.png";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import React from "react";

export default function Register() {
	const initialValues = {
		username: "",
		password: "",
		confirmPassword: "",
	};

	const validationSchema = Yup.object({
		username: Yup.string().required("Username is required"),
		password: Yup.string()
			.min(6, "Password must be at least 6 characters")
			.required("Password is required"),
		confirmPassword: Yup.string()
			.oneOf([Yup.ref("password"), null], "Passwords must match")
			.required("Confirm Password is required"),
	});

	const handleSubmit = async (values, { resetForm }) => {
		try {
			await axios.post("http://localhost:3001/auth", values);
			resetForm();
			console.log("Form submitted");
		} catch (error) {
			console.error("Error during registration:");
			alert("Registration failed. Please try again with a different username.");
		}
	};

	return (
		<div className='LoginContainer'>
			<div className='login'>
				<div className='icon'>
					<img src={vennis} alt='logo' />
					<h2>Vennis Resources</h2>
				</div>
				<h3>Register</h3>
				<Formik
					initialValues={initialValues}
					validationSchema={validationSchema}
					onSubmit={handleSubmit}
				>
					{() => (
						<Form className='loginForm'>
							<div className='loginInputs'>
								<span>Username</span>
								<Field
									type='text'
									autoComplete='new-password'
									placeholder='Enter Username'
									name='username'
								/>
								<ErrorMessage
									name='username'
									component='div'
									className='error'
								/>
							</div>
							<div className='loginInputs'>
								<span>Password</span>
								<Field
									type='password'
									placeholder='Enter Password'
									name='password'
								/>
								<ErrorMessage
									name='password'
									component='div'
									className='error'
								/>
							</div>
							<div className='loginInputs'>
								<span>Confirm Password</span>
								<Field
									type='password'
									placeholder='Re-Enter Password'
									name='confirmPassword'
								/>
								<ErrorMessage
									name='confirmPassword'
									component='div'
									className='error'
								/>
							</div>
							<button type='submit'>Register</button>
						</Form>
					)}
				</Formik>
				<div className='rememberMe'>
					<span>Already have an account?</span>
					<Link to={"/login"}>Login</Link>
				</div>
			</div>
		</div>
	);
}
