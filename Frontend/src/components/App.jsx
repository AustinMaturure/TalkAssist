import { useState, useEffect } from "react";
import pause from "../assets/pause.svg";
import play from "../assets/play.svg";
import reset from "../assets/reset.svg";
import next from "../assets/next.svg";
import prev from "../assets/prev.svg";
import add from "../assets/add.svg";
import edit from "../assets/edit.svg";
import remove from "../assets/remove.svg";
import "../css/App.css";

function App() {
  const [i, setIndex] = useState(0);
  const [v, setVerse] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [showAddPop, setShowAddPop] = useState(false);
  const [points, setPoints] = useState([]);

  let [popTitle, setPopTitle] = useState("");
  let [popContent, setPopContent] = useState("");
  let [verses, setVerses] = useState([]);

  const formatText = (text) => {
    let formattedText = text.replace(/\*\*(.*?)\*\*/g, "<b>$1</b>");

    formattedText = formattedText.replace(/\*(.*?)\*/g, "<i>$1</i>");
    return formattedText;
  };

  const divideTextByThoughts = async (text) => {
    try {
      const response = await fetch(
        "https://austinmatu.pythonanywhere.com/text/api/divide-text/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ text }),
        }
      );

      const data = await response.json();
      return data.dividedText;
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSubmit = async (text) => {
    const dividedText = await divideTextByThoughts(text);
    console.log(dividedText);
    const newPoints = dividedText.split("#");
    setPoints(newPoints);
  };

  const handleSpeech = () => {
    const speechInput = document.getElementById("speech").value;

    handleSubmit(speechInput);
  };

  const handleVerse = (num) => {
    setVerse(num);
    setShowPopup(true);
  };

  const showPop = () => {
    setShowAddPop(true);
  };

  const addPop = (title, content) => {
    const pops = document.getElementById("pop-buttons");

    const newButton = document.createElement("button");

    newButton.innerText = title;
    setVerses((prevVerses) => {
      const updatedVerses = [...prevVerses, content];
      newButton.onclick = () => handleVerse(updatedVerses.length - 1);

      return updatedVerses;
    });

    pops.appendChild(newButton);
  };

  const handleAddPop = () => {
    const title = document.getElementById("pop-title").value;
    const content = document.getElementById("pop-content").value;
    setPopTitle(title);
    setPopContent(content);
    addPop(title, content);
  };

  const handleAddClick = () => {
    handleAddPop();
    setShowAddPop(false);
  };

  const closePopup = (e) => {
    if (e.target.className === "popup") {
      setShowPopup(false);
    }
  };

  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  };

  const startTimer = () => {
    if (!isActive) {
      setIsActive(true);
      const id = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
      setIntervalId(id);
    }
  };

  const stopTimer = () => {
    if (isActive) {
      clearInterval(intervalId);
      setIsActive(false);
    }
  };

  const resetTimer = () => {
    stopTimer();
    setTime(0);
  };

  useEffect(() => {
    return () => clearInterval(intervalId);
  }, [intervalId]);

  useEffect(() => {
    const text = document.getElementById("text");
    text.scrollTop = 0;
    const talk = document.getElementById("talk");
    talk.scrollTop = 0;
  }, [i]);

  const scrollUp = () => {
    const popButtons = document.getElementById("pop-buttons");
    popButtons.scrollTop -= 58;
  };

  const scrollDown = () => {
    const popButtons = document.getElementById("pop-buttons");
    popButtons.scrollTop += 58;
  };

  return (
    <>
      <div className="main" id="main">
        <div className="talk" id="talk">
          <div className="point">
            <div className="point-text-cnt" id="text">
              <p className="point-text">
                {points[i]
                  ? points[i]
                  : "Enter your talk in the input box to separate thoughts automatically #"}
              </p>
            </div>
            <div className="point-control">
              <div className="point-buttons">
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
              {points.length > 0 ? i + 1 : 0}/{points.length}
              {points.length == 0 ? (
                <div className="talk-data">
                  <input
                    type="text"
                    id="speech"
                    placeholder="Paste Talk Here"
                  />
                  <button onClick={handleSpeech}>Submit</button>
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>

          <div className="pop">
            <div className="pops" id="pops">
              <div className="pop-buttons" id="pop-buttons"></div>
              <div className="pops-edit">
                <div className="control-buttons">
                  <button id="control-up" onClick={scrollUp}>
                    <img src={next} alt="" />
                  </button>
                  <button id="control-down" onClick={scrollDown}>
                    <img src={prev} alt="" />
                  </button>
                </div>
                <div className="edit-buttons">
                  <button>
                    <img src={edit} alt="" />
                  </button>
                  <button onClick={() => showPop()}>
                    <img src={add} alt="" />
                  </button>
                </div>
              </div>
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
          {showAddPop && (
            <div className="add-pop">
              <div className="add-pop-content">
                <button
                  className="close-pop-up"
                  onClick={() => setShowAddPop(false)}
                >
                  <img src={remove} alt="" />
                </button>
                <h1>Pop Text</h1>
                <input type="text" name="" id="pop-title" />
                <h1>Pop Content</h1>
                <textarea
                  name=""
                  id="pop-content"
                  cols="30"
                  rows="10"
                ></textarea>
                <button type="submit" onClick={() => handleAddClick()}>
                  Add
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
