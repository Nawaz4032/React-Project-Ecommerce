import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function ProductsDetails() {
  const [product, setProduct] = useState({});

  const history = useNavigate();
  const params = useParams();
  console.log(params.id);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.id}`).then((response) =>
      response.json().then((products) => setProduct(products))
    );
  }, []);

  return (
    <div className="container mx-auto mt-12">
      <button
        className="mb-12 font-bold"
        onClick={() => {
          history(-1);
        }}
      >
        Back
      </button>
      <div className="flex">
        <div className="w-1/2">
          <img src={product.image} alt="" />
        </div>
        <div className="w-1/2">
          <div className="details ml-5">
            <h2 className="text-lg font-bold  mt-6">{product.category}</h2>
            <span className="block">{product.title}</span>
            <span className="mt-3 block">{product.description}</span>
            <span className="font-bold mt-3 block">{product.price}</span>

            <button className="bg-yellow-500 py-1 px-4 rounded-full font-bold mt-6">
              ADD To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
