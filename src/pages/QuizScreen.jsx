import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/QuizScreen.scss";

import loguito from "../assets/logo-jeison.png";


function QuizScreen() {
  const [data, setData] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState({ correct: 0, incorrect: 0 });
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://opentdb.com/api.php?amount=12&difficulty=hard&type=boolean"
      );
      const json = await response.json();
      setData(json.results);
    }

    fetchData();
  }, []);

  const handleAnswer = (answer) => {
    // Actualizar el estado de la pregunta actual para mostrar la siguiente pregunta
    setCurrentQuestion(currentQuestion + 1);

    // Actualizar el puntaje según la respuesta
    if (answer === data[currentQuestion].correct_answer) {
      setScore({ ...score, correct: score.correct + 1 });
    } else {
      setScore({ ...score, incorrect: score.incorrect + 1 });
    }

    // Verificar si se ha respondido a la décima pregunta y redirigir a la página de resultados
    if (currentQuestion === 11) {
      handleResults();
    }
  };

  const handleTryAgain = async () => {
    // Reiniciar el estado para volver a jugar
    setCurrentQuestion(0);
    setScore({ correct: 0, incorrect: 0 });

    // Volver a cargar los datos
    const response = await fetch(
      "https://opentdb.com/api.php?amount=12&difficulty=hard&type=boolean"
    );
    const json = await response.json();
    setData(json.results);
  };

  const handleResults = () => {
    localStorage.setItem("score", JSON.stringify(score));

    // Redirigir a la página de resultados
    navigate("/resultados");
  };

  return (
    <div className="quiz-screen">
      <h1 className="title">Question {currentQuestion + 1}</h1>
      {data[currentQuestion] && (
        <p className="question">{data[currentQuestion].question}</p>
      )}
      {data[currentQuestion] && (
        <div className="buttons">
          <button onClick={() => handleAnswer("True")}>True</button>
          <button onClick={() => handleAnswer("False")}>False</button>
        </div>
      )}
      <img className="loguito" src={loguito} alt="loguito" />
    </div>
  );
}

export default QuizScreen;
