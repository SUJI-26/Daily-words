import React, { useState } from "react";

function Quiz({ words }) {
  const [score, setScore] = useState(0);
  const [current, setCurrent] = useState(0);

  if (current >= words.length) {
    return (
      <div className="card">
        <h2>Quiz Finished</h2>
        <p>Score: {score} / {words.length}</p>
      </div>
    );
  }

  const correctWord = words[current];

  const options = [
    correctWord.meaning_en,
    "Wrong option 1",
    "Wrong option 2",
    "Wrong option 3"
  ].sort(() => Math.random() - 0.5);

  const handleAnswer = (option) => {
    if (option === correctWord.meaning_en) {
      setScore(score + 1);
    }
    setCurrent(current + 1);
  };

  return (
    <div className="card">
      <h2>Meaning of:</h2>
      <h3>{correctWord.word}</h3>

      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => handleAnswer(option)}
          style={{ display: "block", margin: "10px auto" }}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Quiz;
