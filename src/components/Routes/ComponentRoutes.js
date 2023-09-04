import Blog from "../Blog/Blog";
import Home from "../Home/Home";
import Registration from "../Registration/Registration";
import Gallery from "../Gallery/Gallery";
import Contactus from "../contactUs/Contactus";
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import UpcomingEvent from "../upcomings/UpcomingEvent";
import Teams from "../Teams/Teams";
import Auth from "../Login/Auth";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
        path: "/blogs",
        element: <Blog/>,
      },
      {
        path: "/registration",
        element: <Registration/>,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/eclecticateams",
        element: <Teams/>,
      },
      {
        path: "/events",
        element: <UpcomingEvent/>,
      },
      {
        path: "/contact",
        element: <Contactus/>,
      },
      {
        path: "*",
        element: <Home/>,
      },
      {
        path:"/auth",
        element:<Auth/>
      }
  ]);


const ComponentRoutes=()=>{
    return (  
        <RouterProvider router={router} />
)
}

export default ComponentRoutes