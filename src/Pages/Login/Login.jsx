import "./login.scss";
import vennis from "./Vennis.png";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="LoginContainer">
      <div className="login">
        <div className="icon">
          <img src={vennis} alt="logo" />
          <h2>Vennis Resources</h2>
        </div>
        <h3>Login</h3>
        <form
          action=""
          className="loginForm"
          onSubmit={(event) => event.preventDefault()}
        >
          <div className="loginInputs">
            <span>Username</span>
            <input type="text" placeholder="Enter Username" />
          </div>
          <div className="loginInputs">
            <span>Password</span>
            <input type="text" placeholder="Enter Password" />
          </div>
          <button>Login</button>
        </form>
        <div className="rememberMe">
          <div>
            <input type="checkbox" /> Remember Me
          </div>
          {/* <span>Forgot Password?</span> */}
          <Link to={"/register"}>Register</Link>
        </div>
      </div>
    </div>
  );
}
