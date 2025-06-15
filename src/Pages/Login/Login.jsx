import "./login.scss";
import vennis from "./Vennis.png";
import { Link } from "react-router-dom";

export default function Login() {
	return (
		<div className='LoginContainer'>
			<div className='login'>
				<div className='icon'>
					<img src={vennis} alt='logo' />
					<h2>Vennis Resources</h2>
				</div>
				<h3>Login</h3>
				<form className='loginForm'>
					<div className='loginInputs'>
						<span>Username</span>
						<input
							autoComplete='off'
							type='text'
							name='username'
							placeholder='Enter Username'
						/>
					</div>
					<div className='loginInputs'>
						<span>Password</span>
						<input
							type='password'
							name='password'
							placeholder='Enter Password'
						/>
					</div>
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
