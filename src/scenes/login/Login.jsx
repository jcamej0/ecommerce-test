import React, { useState } from "react";
import $ from "jquery";
import './loginController';
import theme from "./theme.module.scss";



const Login = () => {

  const [username, changeUsername] = useState("");
  const [password, changePassword] = useState("");

  const handleNameChange = () => {
    const name = $("#username").val();
    changeUsername(name ? name : "");
  };

  const handlePasswordChange = () => {
    const password = $("#password").val();
    changePassword(password ? password : "");
  };

  return (
    <div className={theme.container}>
      <div className={theme["login-container"]}>
        <h1>ACCESO</h1>
          <form className={theme.form} name="login" id="login-form">
            <input type="text" name="username" value={username} onChange={handleNameChange} id="username"/>
            <label className="error" htmlFor="username" id="username_error">Este campo es requerido.</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              id="password"
            />
            <label className="error" htmlFor="password" id="password_error">Este campo es requerido.</label>
            <button type="submit" className="button" name="submit"> Ingresar </button>
          </form>
        <label id="error_login" className={theme["error-login"]}>
          Error, usuario no encontrado.
        </label>
      </div>
    </div>
  );
};

export default Login;
