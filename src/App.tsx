import { useEffect, useState } from "react";
import "./App.css";

const letters = "abcdefghijklmnopqrstuvwxyz";

const words = [
    "install",
    "rhythm",
    "slope",
    "opinion",
    "mean",
    "crowded",
    "full",
    "irritating",
    "amusing"
];

function getarandomWord() {
  const randomletter = Math.floor(Math.random() * words.length);
  return words[randomletter];
}


function App() {
  const [words, setWords] = useState(getarandomWord());
  const [answers, setAnswers] = useState(['']);

  let wrongAnswers = answers.filter((answer) => !words.includes(answer));
  let correctAnswers = answers.filter((answer) => words.includes(answer));

  const lives = 6 - wrongAnswers.length;

  let lost = lives === 0
  let won = words.split('').every(char => correctAnswers.includes(char))

  function restart() {
    setAnswers([]);
    setWords(getarandomWord());
  }

  useEffect(() => {
    if (lost || won) return;

    function listener (event) {
      let answer = event.key.toLowerCase();

      if (!letters.includes(answer)) return;
      if (answers.includes(answer)) return;

      setAnswers([...answers, answer]);
    };

    window.addEventListener("keydown", listener);

    return () => removeEventListener("keydown", listener);
  }, [answers, lost, won]);

  return (
    <div className="App">
      <div className='header'>
        <h1>The World of Games</h1>
        </div>
        <div className="main">
          <h2>Guess the word!</h2>
      <div className="word">
        {words.split("").map((char, leter) => (
          <span key={leter}>{correctAnswers.includes(char) ? char : "_"} </span>
        ))}
      </div>
      {lost ? (
        <div className="the-div">
          <p>You lost! </p>
          <p>The correct word was: {words}</p>
          <button className="play-again-btn" onClick={restart}>Play Again</button>
        </div>
      ) : null}
      {won ? (
        <div className="the-div">
          <p>You won! Congratss!! :) </p>
          <button className="play-again-btn" onClick={restart}>Play Again</button>
        </div>
      ) : null}
      </div>
    </div>
  );
}

export default App;