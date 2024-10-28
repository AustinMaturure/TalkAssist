import "../css/tutorials.css";
import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";
import Home from "./Home.jsx";

function Tutorial() {
  return (
    <>
      <Home />
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

            <h2>Manually Separating Points</h2>
            <p>
              If you'd like to divide points by yourself use " # " to separate
              them
            </p>
            <ul className="codes">
              e.g
              <li>
                {" "}
                This is Point 1. # This is Point 2. # This is the Last Point.{" "}
              </li>
            </ul>
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
                <code>**text**</code> - Makes <strong>text</strong> bold for
                emphasis.
              </li>
              <li>
                <code>_text_</code> - Italicizes <em>text</em> for highlighting
                quotes or thoughts.
              </li>
              <li>
                <code>__text__</code> - Underlines<u> text</u> for important
                points.
              </li>

              <li>
                <code>~text~</code> - Use single tildes to strike through your{" "}
                <strike>text</strike>.
              </li>
            </ul>
            <p>
              You can add these tags to your speech while submitting it, and
              Talk Assist will format them accordingly.
            </p>
            <div className="tutorial-step">
              <h2>Dialogs</h2>
              <p>
                If your presentation is a dialog seperate speakers with a colon
              </p>
              <ul className="codes">
                e.g<li> A: How's talk assist? </li>
                <li>B: Great</li>
              </ul>
            </div>
          </div>
        </div>
      </div>{" "}
      <Footer />
    </>
  );
}

export default Tutorial;
