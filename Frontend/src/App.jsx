import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [i, setIndex] = useState(0);
  const [v, setVerse] = useState(null); // Store the verse index
  const [showPopup, setShowPopup] = useState(false); // Track pop-up visibility

  const points = [
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Est non
              ipsum harum voluptate architecto dicta, fugit atque quam, aliquam
              molestiae quisquam, odit iusto sapiente eum facilis nostrum ipsam
              temporibus aperiam!`,
    `1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est non
              ipsum harum voluptate architecto dicta, fugit atque quam, aliquam
              molestiae quisquam, odit iusto sapiente eum facilis nostrum ipsam
              temporibus aperiam!`,
    `2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est non
              ipsum harum voluptate architecto dicta, fugit atque quam, aliquam
              molestiae quisquam, odit iusto sapiente eum facilis nostrum ipsam
              temporibus aperiam!`,
  ];

  const verses = ["How wonderful ", "A day in your ", "Like a sunS"];

  const handleVerse = (num) => {
    setVerse(num);
    setShowPopup(true); // Show the pop-up
  };

  // Close popup when clicking outside
  const closePopup = (e) => {
    if (e.target.className === "popup") {
      setShowPopup(false); // Close popup when clicking outside of the content
    }
  };

  return (
    <>
      <div className="main">
        <h1>Talk</h1>
        <div className="talk">
          <div className="point">
            <p className="point-text">{points[i]}</p>
            <button
              onClick={() => setIndex(i === 0 ? points.length - 1 : i - 1)}
            >
              Prev
            </button>
            <button
              onClick={() => setIndex(i === points.length - 1 ? 0 : i + 1)}
            >
              Next
            </button>
          </div>

          <div className="pop">
            <button onClick={() => handleVerse(0)}>Psalm 84:1-3</button>
            <button onClick={() => handleVerse(1)}>Psalm 84:1-3</button>
            <button onClick={() => handleVerse(2)}>Psalm 84:10</button>
          </div>

          {showPopup && (
            <div className="popup" onClick={closePopup}>
              <div className="popup-content">
                <p>{verses[v]}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
