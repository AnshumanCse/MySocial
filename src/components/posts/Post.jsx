import "./post.css";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";
import Comments from "../comments/Comments";
import { useState } from "react";

const Post = ({ post }) => {
  const [commentOpen, setCommentOpen] = useState(false);

  //TEMPORARY
  const liked = false;

  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img
              src="https://images.unsplash.com/photo-1594167154836-838be958f605?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
              // {post.profilePic}
              alt=""
            />
            <div className="details">
              <Link
                to={
                  `/profile/:ID`
                  // ${post.userId}
                }
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="name">
                  {/* {post.name} */}
                  Anshuman
                </span>
              </Link>
              <span className="date"> 1 min ago</span>
            </div>
          </div>
          <MoreHorizIcon />
        </div>
        <div className="content">
          <p>
            Hi!! see this beautiful Nature beauty❤️😘😘
            {/* {post.desc} */}
          </p>
          <img
            src="https://images.unsplash.com/photo-1506038634487-60a69ae4b7b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZnJlZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
            // {post.img}
            alt=""
          />
        </div>
        <div className="info">
          <div className="item">
            {liked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
            21 Likes
          </div>
          <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
            <TextsmsOutlinedIcon />
            12 Comments
          </div>
          <div className="item">
            <ShareOutlinedIcon />
            Share
          </div>
        </div>
        {commentOpen && <Comments />}
      </div>
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img
              src="https://images.unsplash.com/photo-1506038634487-60a69ae4b7b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZnJlZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
              // {post.profilePic}
              alt=""
            />
            <div className="details">
              <Link
                to={
                  `/profile/:ID`
                  // ${post.userId}
                }
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="name">
                  {/* {post.name} */}
                  Rocky
                </span>
              </Link>
              <span className="date"> 1 min ago</span>
            </div>
          </div>
          <MoreHorizIcon />
        </div>
        <div className="content">
          <p>
            every moment is memorable of your life😐
            {/* {post.desc} */}
          </p>
          <img
            src="https://images.unsplash.com/photo-1496692052106-d37cb66ab80c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZyZWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
            // {post.img}
            alt=""
          />
        </div>
        <div className="info">
          <div className="item">
            {liked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
            12 Likes
          </div>
          <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
            <TextsmsOutlinedIcon />3 Comments
          </div>
          <div className="item">
            <ShareOutlinedIcon />
            Share
          </div>
        </div>
        {commentOpen && <Comments />}
      </div>
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img
              src="https://images.unsplash.com/photo-1687360440886-f220f137a16c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
              // {post.profilePic}
              alt=""
            />
            <div className="details">
              <Link
                to={
                  `/profile/:ID`
                  // ${post.userId}
                }
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="name">
                  {/* {post.name} */}
                  Arushi sharma
                </span>
              </Link>
              <span className="date"> 6hr ago</span>
            </div>
          </div>
          <MoreHorizIcon />
        </div>
        <div className="content">
          <p>
            cuteness of parrot😍😍💕
            {/* {post.desc} */}
          </p>
          <img
            src="https://images.unsplash.com/photo-1430990480609-2bf7c02a6b1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZnJlZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
            // {post.img}
            alt=""
          />
        </div>
        <div className="info">
          <div className="item">
            {liked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
            12 Likes
          </div>
          <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
            <TextsmsOutlinedIcon />
            12 Comments
          </div>
          <div className="item">
            <ShareOutlinedIcon />
            Share
          </div>
        </div>
        {commentOpen && <Comments />}
      </div>
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img
              src="https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
              // {post.profilePic}
              alt=""
            />
            <div className="details">
              <Link
                to={
                  `/profile/:ID`
                  // ${post.userId}
                }
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="name">
                  {/* {post.name} */}
                  Vaibhav Gupta
                </span>
              </Link>
              <span className="date"> 2days ago</span>
            </div>
          </div>
          <MoreHorizIcon />
        </div>
        <div className="content">
          <p>
            let's test
            {/* {post.desc} */}
          </p>
          <img
            src="https://plus.unsplash.com/premium_photo-1689596510502-b83cd3ebc47e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
            // {post.img}
            alt=""
          />
        </div>
        <div className="info">
          <div className="item">
            {liked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
            29 Likes
          </div>
          <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
            <TextsmsOutlinedIcon />
            20 Comments
          </div>
          <div className="item">
            <ShareOutlinedIcon />
            Share
          </div>
        </div>
        {commentOpen && <Comments />}
        <span className="loading">
          <CircularProgress />
        </span>
      </div>
    </div>
  );
};

export default Post;
