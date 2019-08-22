import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from "@material-ui/core/Container";

import "./App.css";
import Menu from "./Menu";
import HomePage from "./App/Pages/HomePage";
import CounterPage from "./App/Pages/CounterPage";
import ClockPage from "./App/Pages/ClockPage";
import ProductsPage from "./App/Pages/ProductsPage";
import menuItems from "./menuItems";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItems: menuItems,
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
                component={HomePage}
                pushMenuItemToState={this.pushMenuItemToState}
              />
              <Route path="/counter" component={CounterPage} />
              <Route path="/clock" component={ClockPage} />
              <Route path="/products" component={ProductsPage} />
            </div>
          </Container>
        </div>
      </Router>
    );
  }
}

export default App;
