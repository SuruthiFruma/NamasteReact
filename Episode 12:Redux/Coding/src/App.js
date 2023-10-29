import React from "react";
import { lazy } from "react";
import { Suspense } from "react";
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
import UserContext from "./utils/UserContext";
import { useState } from "react";
import appStore from "./utils/store";
import { Provider } from "react-redux";
// import Grocery from "./components/Grocery";
const LazyGrocery=lazy(()=>import('./components/Grocery.js'))




//Applayout Component
const AppLayout = () => {
 const [userName,setUserName]=useState("Suruthi")
  return (
    <div className="app">
      <Provider store={appStore}>
      <Header></Header>
      <Outlet></Outlet>
      </Provider>
    
      
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
  {
    path:"/grocery",
    // element:<Suspense fallback={<h1>Grocery page is loading.....Please wait
    // </h1>}><Grocery></Grocery></Suspense>
    element:<Suspense fallback={<h1>Grocery page is loading.....Please wait</h1>}><LazyGrocery></LazyGrocery></Suspense>
  }
]
}])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}></RouterProvider>);
