import React from "react";
import { slide as Menu } from "react-burger-menu";
import MyLink from "../../shared/MyLink";
import "./Sidebar.css";

<<<<<<< HEAD
export default (state) => {
    return (
        <Menu {...state}>
            <MyLink to="/">Meal</MyLink>
            <a href="/">Meal2</a>

            <a className="menu-item" href="/burgers">
                Burgers
            </a>

            <a className="menu-item" href="/pizzas">
                Pizzas
            </a>

            <a className="menu-item" href="/desserts">
                Desserts
            </a>
        </Menu>
    );
};
=======
export default state => {
  return (
    <Menu {...state}>
      <MyLink to="/">
        Meal
        </MyLink>
        <a to="/">Meal2</a>
    <MyLink to="/favorite">Favorite</MyLink>
    </Menu>
  );
};
>>>>>>> 3a36f6e66bbfa55ff4f37430f640bf3c4f37c531
