import "./register.scss";
import vennis from "./Vennis.png";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="LoginContainer">
      <div className="login">
        <div className="icon">
          <img src={vennis} alt="logo" />
          <h2>Vennis Resources</h2>
        </div>
        <h3>Register</h3>
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
          <div className="loginInputs">
            <span>Password</span>
            <input type="text" placeholder="Re-Enter Password" />
          </div>

          <button>Register</button>
        </form>
        <div className="rememberMe">
          <span>Alread have an account</span>
          <Link to={"/login"}>Login</Link>
        </div>
      </div>
    </div>
  );
}
