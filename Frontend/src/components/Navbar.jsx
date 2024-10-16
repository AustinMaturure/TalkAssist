import "../css/navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const getTalks = async (text) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}api/talks/`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            username: "Austine",
          },
        }
      );

      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error("Error:", error);
    }
  };
  getTalks();
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
