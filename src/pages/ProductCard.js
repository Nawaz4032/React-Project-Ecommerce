import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard(props) {
  //console.log(props.productDetails);

  let addTocart = (e, products) => {
    e.preventDefault();
    console.log(products);
  };

  return (
    <Link to={`products/${props.productDetails.id}`}>
      <div className="cards">
        <img src={props.productDetails.image} alt="" className="productimg" />
        <h2 className="text-lg font-bold text-center mt-2">
          {props.productDetails.category}
        </h2>
        <span className="text-center block truncate">
          {props.productDetails.title}
        </span>
        <div className="flex justify-between mt-3">
          <span className="font-bold">Rs : {props.productDetails.price}</span>
          <button
            onClick={(e) => {
              addTocart(e, props.productDetails);
            }}
            className="bg-yellow-500 py-1 px-4 rounded-full font-bold"
          >
            ADD
          </button>
        </div>
      </div>
    </Link>
  );
}
