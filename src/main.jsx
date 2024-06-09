import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Navbar from './Components/NavBar/Navbar.jsx';
import Shop from "./Pages/Shop.jsx";
import ShopCategory from "./Pages/ShopCategory.jsx";
import Product from "./Pages/Product.jsx";
import Cart from "./Pages/Cart.jsx";

import Footer from "./Components/Footer/Footer.jsx"
import ShopContextProvider from './Context/ShopContext.jsx';
import men_banner from "./Components/Assets/banner_mens.png";
import women_banner from "./Components/Assets/banner_women.png";
import kid_banner from "./Components/Assets/banner_kids.png";


const router = createBrowserRouter([
  {
    element: <Navbar/>,

    children: [{
      path: "/",
      element: <Shop/>
    },
  {
    path: "/mens",
    element: <ShopCategory banner = {men_banner} category="men"/>
  },
  {
    path: "/womens",
    element: <ShopCategory banner = {women_banner} category="women"/>
  },
 {
  path: "/kids",
  element: <ShopCategory banner={kid_banner} category="kid"/>
 },
 {
  path: "/product",
  element: <Product/>
},
{
  path: "/product/:productId",
  element: <Product/>
},
{
  path: "/cart",
  element: <Cart/>
}
]
  },
  
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <ShopContextProvider>
       <RouterProvider router={router}/>
        <Footer/>
       </ShopContextProvider>
  </React.StrictMode>,
)
