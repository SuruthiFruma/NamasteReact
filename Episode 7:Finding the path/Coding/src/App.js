import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Error from "./components/Error";
import About from "./components/About";
import Cart from "./components/Cart"
import RestaurantMenu from "./components/RestaurantMenu";
import { Outlet, RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import { useEffect } from "react";
import { MENU_API } from "./utils/constants";

const AppLayout = () => {
 
  return (
    <div className="app">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

const appRouter = createBrowserRouter([{
  path: "/",
  element: <AppLayout></AppLayout>,
  errorElement: <Error></Error>,
  children: [{
    path: "/",
    element: <Body></Body>
  },
  {
    path: "/home",
    element: <Home></Home>
  },
  {
    path: "/about",
    element: <About></About>

  },
  {
    path: "/contact",
    element: <Contact></Contact>
  },
  {
    path: "/cart",
    element: <Cart></Cart>
  },
  {
    path:"restaurant/:resid",
    element:<RestaurantMenu></RestaurantMenu>
  },
]
}])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}></RouterProvider>);
