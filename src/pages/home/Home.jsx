import "./home.css";
import Post from "../../components/posts/Post";
import Stories from "../../components/stories/Stories";
import { LinearProgress } from "@mui/material";

const Home = () => {
  return (
    <div className="home">
      <LinearProgress />
      <Stories />
      <Post />
    </div>
  );
};

export default Home;
