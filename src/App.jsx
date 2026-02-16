import React, { useEffect, useState } from "react";
import words from "./data/words.json";
import WordCard from "./components/WordCard";
import BottomNav from "./components/BottomNav";
import Quiz from "./components/Quiz";
import "./App.css";

function App() {
  const [streak, setStreak] = useState(0);
  const [page, setPage] = useState("home");
  const [completedToday, setCompletedToday] = useState([]);

  const todayKey = "completed-" + new Date().toDateString();

  // 🔥 Streak + Load Completed
  useEffect(() => {
    const today = new Date().toDateString();
    const lastVisit = localStorage.getItem("lastVisit");
    let currentStreak = parseInt(localStorage.getItem("streak")) || 0;

    if (lastVisit !== today) {
      currentStreak += 1;
      localStorage.setItem("streak", currentStreak);
      localStorage.setItem("lastVisit", today);
    }

    setStreak(currentStreak);

    const saved = JSON.parse(localStorage.getItem(todayKey)) || [];
    setCompletedToday(saved);
  }, []);

  // 🔥 Mark completed
  const markCompleted = (word) => {
    let saved = JSON.parse(localStorage.getItem(todayKey)) || [];

    if (!saved.includes(word)) {
      saved.push(word);
      localStorage.setItem(todayKey, JSON.stringify(saved));
      setCompletedToday(saved);
    }
  };

  // 🔥 Daily Word Logic
  const todayNumber = Math.floor(
    new Date().getTime() / (1000 * 60 * 60 * 24)
  );

  const index1 = todayNumber % words.length;
  const index2 = (todayNumber + 1) % words.length;

  return (
    <div className="container">
      <h1>📚 Daily English App</h1>
      <h3>🔥 Streak: {streak} days</h3>

      {page === "home" && (
        <>
          <p>Today's Completed: {completedToday.length} / 2</p>

          <WordCard
            data={words[index1]}
            markCompleted={markCompleted}
          />
          <WordCard
            data={words[index2]}
            markCompleted={markCompleted}
          />
        </>
      )}

      {page === "quiz" && (
        <Quiz words={[words[index1], words[index2]]} />
      )}

      {page === "progress" && (
        <div className="card">
          <h2>📊 Progress</h2>
          <p>Total Words: {words.length}</p>
          <p>Current Streak: {streak} days</p>
        </div>
      )}

      <BottomNav currentPage={page} setCurrentPage={setPage} />
    </div>
  );
}

export default App;
