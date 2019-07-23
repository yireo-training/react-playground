import React, { useState, useEffect } from "react";
import ProductListing from "./ProductListing";
import productListingQuery from "../../queries/productListing.gql";
import graphqlClient from "../../utils/graphqlClient";

const ProductListingFunctional = props => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);

  let variables = { search: props.search };
  const client = new graphqlClient();

  const onAjaxSuccess = responseJson => {
    setLoading(false);
    setProducts(responseJson.data.products.items);
  };

  const onAjaxFailure = error => {
    setError(error);
  };

  useEffect(() => {
    setLoading(true);
    client.fetch(
      productListingQuery.loc.source.body,
      variables,
      onAjaxSuccess,
      onAjaxFailure
    );
  }, []);

  return <ProductListing error={error} isLoading={isLoading} products={products} />
};

export default ProductListingFunctional;
