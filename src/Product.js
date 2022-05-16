import React from "react";
import ItemDescription from "./classItemDescription";

function Product({ name, description, price }) {
  return (
    <div>

      <ItemDescription name={name} description={description} />
      <h3>${price}</h3>
    </div>
  );
}

export default Product;