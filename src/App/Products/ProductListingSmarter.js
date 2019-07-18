import React, { Component } from "react";
import Product from "./Product";
import graphqlClient from "../../utils/graphqlClient";
import productListingQuery from "../../queries/productListing.gql";

class ProductListingBasic extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      error: false,
      isLoading: false
    };
  }

  getVariables() {
    return { search: this.props.search };
  }

  componentDidMount() {
    const client = new graphqlClient();

    const onAjaxSuccess = responseJson => {
      this.setState({
        isLoading: false,
        products: responseJson.data.products.items
      });
    };

    const onAjaxError = error => {
      this.setState({ error: error, isLoading: false });
    };

    client.fetch(
      productListingQuery.loc.source.body,
      this.getVariables(),
      onAjaxSuccess,
      onAjaxError
    );
  }

  render() {
    if (this.state.error) {
      return <p>Sorry! There was an error loading the products</p>;
    }

    if (this.state.isLoading) {
      return <p>Loading…</p>;
    }

    if (this.state.products.length === 0) {
      return <p>No products found</p>;
    }

    return (
      <ul>
        {this.state.products.map(product => (
          <Product key={product.id} item={product} />
        ))}
      </ul>
    );
  }
}

export default ProductListingBasic;
