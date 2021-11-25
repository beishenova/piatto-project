import React from "react";
import { slide as Menu } from "react-burger-menu";
import MyLink from "../../shared/MyLink";
import "./Sidebar.css"

export default state => {
  return (
    <Menu {...state}>
      <MyLink to='/'>
        Meal
        </MyLink>
        <a href="/">Meal2</a>

      {/* <a className="menu-item" href="/burgers">
        Burgers
      </a>

      <a className="menu-item" href="/pizzas">
        Pizzas
      </a>

      <a className="menu-item" href="/desserts">
        Desserts
      </a> */}
    </Menu>
  );
};