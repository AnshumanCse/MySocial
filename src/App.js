// import React, { useContext } from "react";/
import Register from "./pages/register/Register";
import {
  createBrowserRouter,
  RouterProvider,
  // Route,
  Outlet,
  // Navigate,
} from "react-router-dom";
import Login from "./pages/login/Login";
import NavBar from "./components/navBar/NavBar";
import LeftBar from "./components/leftBar/LeftBar";
import RightBar from "./components/rightBar/RightBar";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import "./style.css";
// import { AuthContext } from "./context/authContext";

const App = () => {
  // const currentUser = true;
  // const { currentUser } = useContext(AuthContext);

  const Layout = () => {
    return (
      <div className="theme-dark">
        <NavBar />
        <div style={{ display: "flex" }}>
          <LeftBar />
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>
          <RightBar />
        </div>
      </div>
    );
  };

  // function that protecting routing
  // const protectedRoute = ({ children }) => {
  //   if (!currentUser) {
  //     return <Navigate to={"/login"} />;
  //   }
  //   return children;
  // };
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        // <protectedRoute>
        <Layout />
        // </protectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:ID",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
