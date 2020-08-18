import React, { useState, useEffect } from "react";
import ProductListing from "./ProductListing";
import { loader } from 'graphql.macro';
import graphqlClient from "../../../utils/graphqlClient";

const productListingQuery = loader("../../../queries/productListing.gql");
const client = new graphqlClient();

const ProductListingContainerFunctional = props => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    let variables = { search: props.search };
    setLoading(true);
    client.fetch(
      productListingQuery,
      variables,
      responseJson => {
        setLoading(false);
        setProducts(responseJson.data.products.items);
      },
      error => {
        setError(error);
      }
    );
  }, [props.search]);

  return (
    <ProductListing error={error} isLoading={isLoading} products={products} search={props.search} />
  );
};

export default ProductListingContainerFunctional;
