
import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Layouts/MainLayOut";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import ErrorPage from "../pages/ErrorPage";


 export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut />,
      errorElement : <ErrorPage></ErrorPage>,
      children:[
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/about",
          element: <About />
        },
    ]
    },
  ]);