import { useState, useEffect } from "react";
import pause from "./assets/pause.svg";
import play from "./assets/play.svg";
import reset from "./assets/reset.svg";
import next from "./assets/next.svg";
import prev from "./assets/prev.svg";
import "./App.css";

function App() {
  const [i, setIndex] = useState(0);
  const [v, setVerse] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [points, setPoints] = useState([]);
  const [title, setTitle] = useState(
    "Enter Title in the box by scrolling down"
  );

  const formatText = (text) => {
    let formattedText = text.replace(/\*\*(.*?)\*\*/g, "<b>$1</b>");

    formattedText = formattedText.replace(/\*(.*?)\*/g, "<i>$1</i>");
    return formattedText;
  };

  const handleSpeech = () => {
    const speechInput = document.getElementById("speech").value;
    const newPoints = speechInput.split("#");
    setPoints(newPoints);
  };

  const verses = [
    "84 How lovely your grand tabernacle is, O Jehovah of armies! 2 My whole being yearns, Yes, I am faint with longing, For the courtyards of Jehovah. My heart and my flesh shout joyfully to the living God.3Even the bird finds a home there And the swallow a nest for herself, Where she cares for her young Near your grand altar, O Jehovah of armies, My King and my God!",
    "84: 10 For a day in your courtyards is better than a thousand anywhere else! I choose to stand at the threshold of the house of my God Rather than to dwell in the tents of wickedness.",
    "84: 11 For Jehovah God is a sun and a shield; He gives favor and glory. Jehovah will not hold back anything good From those walking in integrity.",
  ];

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

  const [time, setTime] = useState(0); // Time in seconds
  const [isActive, setIsActive] = useState(false); // Track if stopwatch is active
  const [intervalId, setIntervalId] = useState(null); // Store interval ID

  // Format the time into mm:ss
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  };

  // Start the stopwatch
  const startTimer = () => {
    if (!isActive) {
      setIsActive(true);
      const id = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
      setIntervalId(id);
    }
  };

  // Stop the stopwatch
  const stopTimer = () => {
    if (isActive) {
      clearInterval(intervalId);
      setIsActive(false);
    }
  };

  // Reset the stopwatch
  const resetTimer = () => {
    stopTimer();
    setTime(0);
  };

  useEffect(() => {
    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, [intervalId]);

  return (
    <>
      <h1 className="talk-title">{title}</h1>
      <div className="main">
        <div className="talk">
          <div className="point">
            <div className="point-text-cnt">
              <p className="point-text">
                {points[i]
                  ? points[i]
                  : "Enter your talk in the input box with thoughts separated by #"}
              </p>
            </div>
            <div className="point-control">
              <button
                onClick={() => setIndex(i === 0 ? points.length - 1 : i - 1)}
              >
                <img src={prev} alt="" />
              </button>
              <button
                onClick={() => setIndex(i === points.length - 1 ? 0 : i + 1)}
              >
                <img src={next} alt="" />
              </button>
            </div>
          </div>

          <div className="pop">
            <div className="pop-buttons">
              <button onClick={() => handleVerse(0)}>Psalm 84:1-3</button>
              <button onClick={() => handleVerse(1)}>Psalm 84:1-3</button>
              <button onClick={() => handleVerse(2)}>Psalm 84:10</button>
            </div>
            <div className="timer">
              <h1>{formatTime(time)}</h1>
              <div>
                <button onClick={isActive ? stopTimer : startTimer}>
                  <img src={isActive ? pause : play} alt="" />
                </button>
                <button onClick={resetTimer}>
                  <img src={reset} alt="" />
                </button>
              </div>
            </div>
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
      <div className="talk-data">
        <input type="text" id="title" placeholder="Enter Title" />
        <button
          onClick={() => setTitle(document.getElementById("title").value)}
        >
          Submit
        </button>
        <input type="text" id="speech" placeholder="Paste Talk Here" />
        <button onClick={handleSpeech}>Submit</button>
      </div>
    </>
  );
}

export default App;
