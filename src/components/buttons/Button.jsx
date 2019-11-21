import React from "react";
import theme from "./theme.module.scss";

const Button = ({ color, ico, children, className, handleClick }) => {
  return (
    <button
      className={`${theme.button} ${theme[`button-${color}`]} ${className}`}
      onClick={handleClick}
    >
      {ico && <i className="material-icons">{ico}</i>}

      <span>{children}</span>
    </button>
  );
};

export default Button;
