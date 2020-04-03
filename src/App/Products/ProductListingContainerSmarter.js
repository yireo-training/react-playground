import React, { Component } from "react";
import ProductListing from "./ProductListing";
import graphqlClient from "../../utils/graphqlClient";
import productListingQuery from "../../queries/productListing.gql";

class ProductListingContainerSmarter extends Component {
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

    client.fetch(
      productListingQuery.loc.source.body,
      this.getVariables(),
      responseJson => {
        this.setState({
          isLoading: false,
          products: responseJson.data.products.items
        });
      },
      error => {
        this.setState({ error: error, isLoading: false });
      }
    );
  }

  render() {
    return <ProductListing error={this.state.error} isLoading={this.state.isLoading} products={this.state.products} />
  }
}

export default ProductListingContainerSmarter;
