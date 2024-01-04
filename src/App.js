import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import './App.scss';
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer"
import About from "./pages/About/About";



const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />

    </div>
  )
}


const router = createBrowserRouter(
  [
    {
      id:1,
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },

        {
          path: "/products/:id",
          element: <Products />
        },
        {
          path: "/product/:id",
          element: <Product />
        },
        {
          
          path:"/about",
          element: <About/>
        }
        

      ]
    },
   

  ]
)
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}
export default App;



