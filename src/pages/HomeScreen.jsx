import React from "react";
import { Link } from "react-router-dom";

export default function HomeScreen() {
  return (
    <div>
      <h1>El juego de preguntas</h1>
      <Link to={`quiz`}>Comenzar</Link>
    </div>
  );
}
