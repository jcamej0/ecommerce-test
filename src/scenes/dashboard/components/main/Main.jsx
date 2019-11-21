import React from "react";
import theme from './theme.module.scss';

const Main = () => {
  return (
    <div className={theme.container}>
      <h1>BIENVENIDO AL PANEL E-COMMERCE DE PRUEBA</h1>
			<h1>PARA</h1>
      <img src="https://2019.es.pycon.org/media/sponsor_files/Cecotec_logotipo_1.png" alt="logo cecotec"></img>
    </div>
  );
};

export default Main;
