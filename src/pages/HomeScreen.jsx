import React from "react";
import { Link } from "react-router-dom";
import loguito from "../assets/logo-jeison.png";

import {} from "../styles/HomeScreen.scss";

export default function HomeScreen() {
  return (
    <div className="init-quest">
      <h1>Welcome To the trivia Challenge</h1>
      <p>Your Will be presented with 12 True or False questions.</p>
      <p> ¿Ready?</p>
      <Link to={`quiz`}>Begin</Link>
      <div className="container-loguito">
        <img className="loguito" src={loguito} alt="loguito" />
      </div>
    </div>
  );
}
