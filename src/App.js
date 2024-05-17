import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navigation from "./Components/Navigation";
import Products from "./pages/Products";
import Carts from "./pages/Carts";
import ProductsDetails from "./pages/ProductsDetails";
import { CreateContext } from "./CreateContext";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [cart, setCart] = useState({});

  useEffect(() => {
    const cart = window.localStorage.getItem("cart");
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Carts />} />
          <Route path="/products" exact element={<Products />} />
          <Route path="/products/:id" element={<ProductsDetails />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
