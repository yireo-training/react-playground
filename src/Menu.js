import React from "react";
import "./Menu.css";
import { Link, NavLink } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuItem from '@material-ui/core/MenuItem';

class Menu extends React.Component {
  render() {
    return (
      <div className="Menu">
        <AppBar position="static" color="default">
          <Toolbar>
          {this.props.items.map((menuItem, i) => (
            <MenuItem key={i}>
              <NavLink to={menuItem.link}>{menuItem.name}</NavLink>
            </MenuItem>
          ))}
              </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Menu;
