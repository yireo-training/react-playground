import React from "react";
import ProductListing from "./ProductListing";
import productListingJson from "../../../data/productListing.json";

const ProductListingContainerTest = props => {
  const products = productListingJson.data.products.items;
  const error = false;
  const isLoading = false;

  return <ProductListing error={error} isLoading={isLoading} products={products} />
};

export default ProductListingContainerTest;
