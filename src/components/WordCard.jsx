import React, { useState } from "react";

function WordCard({ data, markCompleted }) {
  const [revealed, setRevealed] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleReveal = () => {
    setRevealed(true);
  };

  const handleCompleted = () => {
    markCompleted(data.word);

    setShowPopup(true);

    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
  };

  return (
    <div className="card">
      <h2>{data.word}</h2>

      <p><strong>English:</strong> {data.meaning_en}</p>

      {revealed && (
        <p className="tamil">
          <strong>Tamil:</strong> {data.meaning_ta}
        </p>
      )}

      <p><em>Example:</em> {data.sentence}</p>

      <div className="btn-group">
        <button onClick={handleReveal}>
          Reveal Tamil
        </button>

        <button onClick={handleCompleted}>
          Completed
        </button>
      </div>

      {showPopup && (
        <div className="popup">
          🎉 Today word completed!
        </div>
      )}
    </div>
  );
}

export default WordCard;
