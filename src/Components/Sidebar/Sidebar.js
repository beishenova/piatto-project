import React from "react";
import { slide as Menu } from "react-burger-menu";
import MyLink from "../../shared/MyLink";
import "./Sidebar.css";

export default (state) => {
    return (
        <Menu {...state}>
            <MyLink to="/">Meal</MyLink>
            <a to="/">Meal2</a>
            <MyLink to="/favorite">Favorite</MyLink>
        </Menu>
    );
};
