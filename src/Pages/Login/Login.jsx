import "./login.scss";
import vennis from "./Vennis.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const navigate = useNavigate(); // Initialize useNavigate

	const login = async (event) => {
		event.preventDefault();

		const data = { username: username, password: password };
		axios.post("http://localhost:3001/auth/login", data).then((respond) => {
			if (respond.data.error) {
				alert(respond.data.error);
			} else {
				sessionStorage.setItem("accessToken", respond.data);
				navigate("/");
			}
		});
	};

	return (
		<div className='LoginContainer'>
			<div className='login'>
				<div className='icon'>
					<img src={vennis} alt='logo' />
					<h2>Vennis Resources</h2>
				</div>
				<h3>Login</h3>
				<form className='loginForm' onSubmit={login}>
					<div className='loginInputs'>
						<span>Username</span>
						<input
							autoComplete='off'
							type='text'
							name='username'
							placeholder='Enter Username'
							value={username}
							onChange={(event) => setUsername(event.target.value)}
						/>
					</div>
					<div className='loginInputs'>
						<span>Password</span>
						<input
							type='password'
							name='password'
							placeholder='Enter Password'
							value={password}
							onChange={(event) => setPassword(event.target.value)}
						/>
					</div>
					{error && <div className='error'>{error}</div>}
					<button type='submit'>Login</button>
				</form>
				<div className='rememberMe'>
					<div>
						<input type='checkbox' name='rememberMe' /> Remember Me
					</div>
					<Link to={"/register"}>Register</Link>
				</div>
			</div>
		</div>
	);
}
