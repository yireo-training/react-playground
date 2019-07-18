import React, { useState, useEffect } from "react";
import Product from "./Product";
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

  if (error) {
    return <p>Sorry! There was an error loading the products</p>;
  }

  if (isLoading) {
    return <p>Loading…</p>;
  }

  if (products.length === 0) {
    return <p>No products found</p>;
  }

  return (
    <ul>
      {products.map(product => (
        <Product key={product.id} item={product} />
      ))}
    </ul>
  );
};

export default ProductListingFunctional;
