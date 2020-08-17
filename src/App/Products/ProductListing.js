import React from "react";
import Product from "./SingleProduct";

const ProductListing = props => {
  if (props.error) {
    return <p>Sorry! There was an error loading the products</p>;
  }

  if (props.isLoading) {
    return <p>Loading…</p>;
  }

  if (props.products.length === 0) {
    return <p>No products found</p>;
  }

  return (
    <>
    <h3>Search: {props.search}</h3>
    <ul>
      {props.products.map(product => (
        <Product key={product.id} item={product} />
      ))}
    </ul>
    </>
  );
};

export default ProductListing;
