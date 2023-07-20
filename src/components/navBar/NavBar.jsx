import "./navBar.css";
import "../../index.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
// import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";
// import { useContext } from "react";
// import { DarkModeContext } from "../../context/darkModeContext";
// import { AuthContext } from "../../context/authContext";

const Navbar = () => {
  // const { toggle, darkMode } = useContext(DarkModeContext);
  // const { currentUser } = useContext(AuthContext);
  // const [dark, setDarkMode] = useState(true);
  return (
    // <div className={darkMode ? "darkmode" : "lightMode"}>
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>MySocial</span>.com
        </Link>
        <div className="left-icons">
          <HomeOutlinedIcon />
          <DarkModeOutlinedIcon />
          {/* {darkMode ? (
              <WbSunnyOutlinedIcon onClick={() => setDarkMode(!darkMode)} />
            ) : (
              <DarkModeOutlinedIcon onClick={() => lightMode} />
            )} */}
          <GridViewOutlinedIcon />
        </div>
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
        <PersonOutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsOutlinedIcon />
        <Link to="/login" style={{ textDecoration: "none" }}>
          <button className="btn">Join</button>
        </Link>

        <div className="user">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            // src={currentUser.profilePic}
            alt=""
          />
          <span>
            You
            {/* {currentUser.name} */}
          </span>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Navbar;
