import React, { Component } from "react";
import Product from "./Product";

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

  getQuery() {
    return `
        query getMyProducts($search: String) {
            products(search: $search) {
              items {
                id
                name
                sku
                small_image {
                    label
                    url
                  }
                swatch_image
                description {
                    __html: html
                }
              }
            }
        }       
        `;
  }

  fetchData(url) {
    this.setState({ isLoading: true });
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: this.getQuery(),
        variables: this.getVariables()
      })
    })
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        this.setState({ isLoading: false });
        return response;
      })
      .then(response => response.json())
      .then(responseJson =>
        this.setState({ products: responseJson.data.products.items })
      )
      .catch(error => this.setState({ error: error }));

    return;
  }

  componentDidMount() {
    this.fetchData("http://m2.betelgeuse.yr/graphql");
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
