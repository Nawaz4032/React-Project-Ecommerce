import React, { useEffect, useContext } from "react";
import ProductCard from "./ProductCard";
import { useState } from "react";
import { CreateContext } from "../CreateContext";

export default function Products() {
  //const { nam } = useContext(CreateContext);

  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((products) => {
        return setProduct(products);
      });
  }, []);
  return (
    <div className="container mx-auto pb-24">
      <h1 className="text-lg font-bold my-8">Products </h1>

      <div className="grid grid-cols-5 my-8 gap-10">
        {product.map((products) => (
          <ProductCard key={products.id} productDetails={products} />
        ))}
      </div>
    </div>
  );
}
