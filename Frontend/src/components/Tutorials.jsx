import "../css/tutorials.css";
function Tutorial() {
  return (
    <>
      <div className="tutorial-container" id="tutorials">
        <div className="tutorials">
          <h1>Learn how to get the best out of Talk assist</h1>
          <h1>i.e the best out of your talk</h1>
          <div className="tutorial-step">
            <h2>Step 1: Adding Points</h2>
            <p>
              To begin organizing your talk, enter your speech in the input box
              and hit submit. This will divide your speech into manageable
              points.
            </p>
          </div>
          <div className="tutorial-step">
            <h2>Step 2: Navigating Points</h2>
            <p>
              Use the previous and next buttons to navigate between the points
              in your talk.
            </p>
          </div>
          <div className="tutorial-step">
            <h2>Step 3: Adding Popups</h2>
            <p>
              Click the '+' button to add popups that can store extra
              information related to each point.
            </p>
          </div>
          <div className="tutorial-step">
            <h2>Step 4: Using the Timer</h2>
            <p>
              Use the built-in timer to track the duration of your speech. You
              can start, pause, and reset the timer as needed.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tutorial;
