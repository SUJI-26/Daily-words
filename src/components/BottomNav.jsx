import { motion } from "framer-motion";

function BottomNav({ currentPage, setCurrentPage }) {
  return (
    <div className="bottom-nav">
      {["home", "quiz", "progress"].map((item) => (
        <motion.button
          key={item}
          whileTap={{ scale: 0.85 }}
          className={currentPage === item ? "active" : ""}
          onClick={() => setCurrentPage(item)}
        >
          {item.toUpperCase()}
        </motion.button>
      ))}
    </div>
  );
}

export default BottomNav;
