import {
    createBrowserRouter
  
  } from "react-router-dom";
import ErrorPage from "../Shared/Category/ErrorPage";
import Main from "../Layout/Main";
import Home from "../Home/Home";
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        }
    ]
}
]);