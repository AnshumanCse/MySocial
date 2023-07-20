import { Link } from "react-router-dom";
import "./register.css";

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>MySocial.</h1>
          <p>
            Connect, share, and engage with others on our vibrant social
            platform. Stay connected with friends and family, discover new
            interests, and express yourself with posts, photos, and videos. Join
            a MySocial Community..
          </p>
          <span>Do you have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="text" placeholder="Name" />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
