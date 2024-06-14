import {
    createBrowserRouter
  } from "react-router-dom";
import Error from "../pages/Error";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Show from "../pages/Home/Show";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AllShow from "../pages/Home/AllShow";
import Success from "../pages/Success";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement: <Error/>,
      children:[{
        path: "/",
        element: <Home/>
      },{
        path: "/show/:id",
        element: <Show/>
        },
        {
          path: "/login",
          element: <Login/>
        },
        {
          path: "/register",
          element: <Register/>
        },
        {
          path: "/allShow",
          element: <AllShow/>
        },
        {
          path: "/success",
          element: <Success/>
        },
        {
          path: "/error",
          element: <Error/>
        }
    ]
    }
  ]);

export default router;