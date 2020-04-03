import React, { useState, useEffect } from "react";
import ProductListing from "./ProductListing";
import productListingQuery from "../../queries/productListing.gql";
import graphqlClient from "../../utils/graphqlClient";

const ProductListingContainerFunctional = props => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);

  let variables = { search: props.search };
  const client = new graphqlClient();

  useEffect(() => {
    setLoading(true);
    client.fetch(
      productListingQuery.loc.source.body,
      variables,
      responseJson => {
        setLoading(false);
        setProducts(responseJson.data.products.items);
      },
      error => {
        setError(error);
      }
    );
  }, []);

  return (
    <ProductListing error={error} isLoading={isLoading} products={products} />
  );
};

export default ProductListingContainerFunctional;
