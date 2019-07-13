import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from "@material-ui/core/Container";

import "./App.css";
import Menu from "./Menu.js";
import Home from "./App/Home.js";
import ProductList from "./App/ProductList.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItems: [
        {
          id: "home",
          name: "Home",
          link: ""
        },
        {
          id: "products",
          name: "Products",
          link: "products"
        }
      ],
      counter: 0
    };
  }

  pushMenuItemToState = (menuItem) => {
    let items = this.state.menuItems;
    items.push({ id: menuItem.link, name: menuItem.name, link: menuItem.link });
    this.setState({ menuItems: items });
  }

  render() {
    return (
      <Router>
        <div id="root">
          <Container maxWidth="lg">
            <Menu items={this.state.menuItems} />
            <div className="content">
              <Route
                exact
                path="/"
                component={Home}
                pushMenuItemToState={this.pushMenuItemToState}
              />
              <Route path="/products" component={ProductList} />
            </div>
          </Container>
        </div>
      </Router>
    );
  }
}

export default App;
