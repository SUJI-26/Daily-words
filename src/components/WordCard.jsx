import React from "react";
import { motion } from "framer-motion";

function WordCard({ data, markCompleted }) {
  const speakWord = () => {
    const speech = new SpeechSynthesisUtterance(data.word);
    speech.lang = "en-US";
    window.speechSynthesis.speak(speech);
  };

  return (
    <motion.div
      className="card"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
    >
      <h2>{data.word}</h2>
      <p><strong>English:</strong> {data.meaning_en}</p>
      <p><strong>Tamil:</strong> {data.meaning_ta}</p>
      <p><strong>Sentence:</strong> {data.sentence}</p>

      <div className="btn-group">
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={speakWord}
        >
          🔊 Pronounce
        </motion.button>

        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => markCompleted(data.word)}
        >
          ✅ Complete
        </motion.button>
      </div>
    </motion.div>
  );
}

export default WordCard;
