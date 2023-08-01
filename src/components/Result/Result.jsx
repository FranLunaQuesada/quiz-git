import "./result.scss";
import { useState, useEffect } from "react";

const Result = ({ totalQuestions, result, onTryAgain }) => {
  const [name, setName] = useState("");
  const [highScores, setHighScores] = useState([]);
  const [showScores, setShowScores] = useState(false);

  useEffect(() => {
    setHighScores(JSON.parse(localStorage.getItem("highScores")) || []);
  }, []);

  const handleSave = () => {
    const score = {
      name,
      score: result.score,
    };

    const newHighScores = [...highScores, score].sort(
      (a, b) => b.score - a.score
    );

    setHighScores(newHighScores);
    setShowScores(true);
    localStorage.setItem("highScores", JSON.stringify(newHighScores));
  };

  const handleTryAgain = () => {
    setShowScores(false);
    setHighScores([]);
    onTryAgain();
  };

  return (
    <div className="result">
      <h3>Resultado</h3>
      <p>
        Preguntas Totales: <span>{totalQuestions}</span>
      </p>
      <p>
        Puntuación Total: <span>{result.score}</span>
      </p>
      <p>
        Aciertos: <span>{result.correctAnswers}</span>
      </p>
      <p>
        Fallos: <span>{result.wrongAnswers}</span>
      </p>

      <button onClick={handleTryAgain}>Intentar otra vez</button>
      {!showScores ? (
        <>
          <h3>
            Introduce tu nombre <br /> para guardar tu puntuación!
          </h3>
          <input
            placeholder="Your Name"
            value={name}
            onChange={(evt) => setName(evt.target.value)}
          />
          <button onClick={handleSave}>Guardar</button>
        </>
      ) : (
        <>
          <table>
            <thead>
              <tr>
                <th>Ranking</th>
                <th>Nombre</th>
                <th>Puntuación</th>
              </tr>
            </thead>
            <tbody>
              {highScores.map((highScore, i) => {
                return (
                  <tr key={`${highScore.score}${highScore.name}${i}`}>
                    <td>{i + 1}</td>
                    <td>{highScore.name}</td>
                    <td>{highScore.score}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default Result;
