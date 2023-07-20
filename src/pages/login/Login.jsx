// import { useContext } from "react";
import { Link } from "react-router-dom";
// import { AuthContext } from "../../context/authContext";
import "./login.css";
// import useContext from "react";
const Login = () => {
  // const { login } = useContext(AuthContext);

  // const handleLogin = () => {
  //   login();
  // };

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>MySocial</h1>
          <p>
            Connect, share, and engage with others on our vibrant social
            platform. Stay connected with friends and family, discover new
            interests, and express yourself with posts, photos, and videos. Join
            a MySocial Community
          </p>
          <span>Don't you have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
            {/* onClick={handleLogin} */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
