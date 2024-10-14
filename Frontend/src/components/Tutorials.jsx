import "../css/tutorials.css";

function Tutorial() {
  return (
    <>
      <div className="tutorial-container" id="tutorials">
        <div className="tutorials">
          <h1>Learn how to get the best out of Talk Assist</h1>
          <h1>i.e., the best out of your talk</h1>

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

          <div className="tutorial-step">
            <h2>Step 5: Formatting Text with Tags</h2>
            <p>
              Talk Assist supports various text formatting tags to help
              emphasize key parts of your speech. Here are some tags you can
              use:
            </p>
            <ul className="codes">
              <li>
                <code>**text**</code> - Makes text <strong>bold</strong> for
                emphasis.
              </li>
              <li>
                <code>_text_</code> - <em>Italicizes</em> text for highlighting
                quotes or thoughts.
              </li>
              <li>
                <code>__text__</code> - <u>Underlines</u> text for important
                points.
              </li>

              <li>
                <code>~text~</code> - Use single tildes to strike through your
                text.
              </li>
            </ul>
            <p>
              You can add these tags to your speech while submitting it, and
              Talk Assist will format them accordingly.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tutorial;
