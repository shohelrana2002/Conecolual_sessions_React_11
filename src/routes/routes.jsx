import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Profile from "../Pages/Profile";
import ProtectateRouter from "../components/ProtectateRouter/ProtectateRouter";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/profile",
        element: (
          <ProtectateRouter>
            {" "}
            <Profile></Profile>
          </ProtectateRouter>
        ),
      },
    ],
  },
]);
