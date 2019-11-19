import React from "react";
import { Link } from "react-router-dom";
import theme from "./theme.module.scss";

const Sidebar = ({ match }) => {
  return (
    <nav className={theme.navigation}>
      <ul>

          <Link to="/dashboard/products" >PRoductos</Link>

      </ul>
    </nav>
  );
};

export default Sidebar;
