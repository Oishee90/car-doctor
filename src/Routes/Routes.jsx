import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home";
import Login from "../Shared/Login";
import Signup from "../Shared/Signup";

import Booking from "../Pages/Booking";
import Bookings from "../Pages/Bookings";
import PrivateRoute from "../Pages/PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
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
          path: "/signup",
          element: <Signup></Signup>,
        },
        {
          path: "/booking/:id",
          element: <Booking></Booking>,
          loader: ({params}) => fetch (`http://localhost:5112/services/${params.id}`)
        },
       
        {
          path: "/bookings",
          element: <PrivateRoute><Bookings></Bookings></PrivateRoute>,
      
        },
      ],
    },
  ]);

  export default router;