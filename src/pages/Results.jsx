import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import loguito from "../assets/logo-jeison.png";

import "../styles/Results.scss";




function Results() {
  const [score, setScore] = useState(null);



  useEffect(() => {
    const scoreString = localStorage.getItem("score");
    const scoreObject = JSON.parse(scoreString);
    setScore(scoreObject);
  }, []);
  console.log(score);
  const {correct, incorrect} = score ?? {};
  return (
    <div className="results">
      <h1>Resultados</h1>
      <h3>{correct} Correctas</h3>
      <h3>{incorrect} Incorrectas</h3>
      <Link to={`/`}>Try Again</Link>
    </div>
  );
}

export default Results;
