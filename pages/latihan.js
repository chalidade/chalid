import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { list_product } from "../components/variables/product";

export default function latihan() {
  console.log(list_product);

  return (
    <>
      {list_product.map((product) => {
        return (
          <>
            <p>{product.name}</p>
            <img src={product.image[0]} />
            <p>{product.price}</p>
            <hr />
          </>
        );
      })}
    </>
  );
}
