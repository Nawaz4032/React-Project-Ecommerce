import React from "react";
import Products from "./Products";

export default function Home() {
  return (
    <>
      <div className="hero">
        <div className="">
          <div>
            <img src="images/slider-1.webp" className="self-end" alt="" />
          </div>
        </div>
      </div>
      <div className="pb-24">
        <Products />
      </div>
    </>
  );
}
