import React from "react";
import { Link } from "react-router-dom";
import theme from "./theme.module.scss";

const Sidebar = ({ match }) => {
  return (
    <nav className={theme.navigation}>
      <ul>
			<Link to="/dashboard">
          <div className={theme['menu-option']}>
            <i className="material-icons">home</i>
            <span>INICIO</span>
          </div>
        </Link>
        <Link to="/dashboard/products">
          <div className={theme['menu-option']}>
            <i className="material-icons">shopping_cart</i>
            <span>PRODUCTOS</span>
          </div>
        </Link>
      </ul>
    </nav>
  );
};

export default Sidebar;
