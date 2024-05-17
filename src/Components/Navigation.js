import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  const cartStyle = {
    background: "orange",
    display: "flex",
    color: "white",
    padding: "5px 10px",
    borderRadius: "20px"
  };
  return (
    <>
      <nav className="container mx-auto flex items-center justify-between py-4">
        <Link to="/">
          <img src="/images/logo.png" width="200px" alt="logo" />
        </Link>
        <ul className="flex items-center">
          <li className="ml-5">
            <Link to="/">Home</Link>
          </li>
          <li className="ml-5">
            <Link to="/products">Products</Link>
          </li>
          <li className="ml-5">
            <Link to="/cart">
              <div style={cartStyle}>
                <span>10</span>
                <img className="ml-2" src="images/cart.png" alt="" />
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
