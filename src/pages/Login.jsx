import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "../styles/login.css";

function Login(){

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate("/checkout");
  }

  return(
    <div className="login-page">
      <div className="login-box">
        <p className="login-label">Guest Access</p>

        <h1>Login to continue</h1>

        <p className="login-text">
          This sprint uses mock authentication. Click below to continue
          as a guest and access the checkout page.
        </p>

        <button onClick={handleLogin} className="login-btn">
          Login as Guest
        </button>
      </div>
    </div>
  )
}

export default Login;