import "../css/navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <header>
        <h1>TalkAssist</h1>
        <nav>
          <ul>
            <li>
              <a href="#main">Tool</a>
            </li>

            <li>
              <a href="#tutorials">Tutorials</a>
            </li>
            <li>
              <a href="">
                <Link to="signup/">Accounts</Link>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
