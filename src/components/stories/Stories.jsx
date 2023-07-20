// import { useContext } from "react";
import "./stories.css";
// import { AuthContext } from "../../context/authContext";

const Stories = () => {
  //   const { currentUser } = useContext(AuthContext);

  //TEMPORARY
  const stories = [
    {
      id: 1,
      name: "Anshuman tiwari",
      img: "https://images.unsplash.com/photo-1689582544805-1d76bddbca5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3M3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 2,
      name: "Akhil",
      img: "https://images.unsplash.com/photo-1689598000423-24dc8b778554?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2M3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 3,
      name: "Arushi",
      img: "https://images.unsplash.com/photo-1688388040015-c3985c83a12d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1OHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 4,
      name: "Vaibhav",
      img: "https://plus.unsplash.com/premium_photo-1688700438179-b649d32b192f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4MHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
  ];

  return (
    <div className="stories">
      <div className="story">
        <img
          src="https://images.unsplash.com/photo-1689585465551-31b9f326eb1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4OXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          alt=""
        />
        <span>
          You
          {/* {currentUser.name} */}
        </span>
        <button>+</button>
      </div>
      {stories.map((story) => (
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;
