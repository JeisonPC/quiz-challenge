import React from "react";
import { Link } from "react-router-dom";
import loguito from "../assets/logo-jeison.png";

import {  } from "../styles/HomeScreen.scss";

export default function HomeScreen() {
  return (
    <div className="init-quest">
      <h1>El juego de preguntas</h1>
      <Link to={`quiz`}>Comenzar</Link>
      <div className="container-loguito">
        <img className="loguito" src={loguito} alt="loguito" />
      </div>
    </div>
  );
}
