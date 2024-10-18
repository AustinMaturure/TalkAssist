import { useEffect, useState } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import "../css/dashboard.css";
import getTalks from "./utils/GetTalks.jsx";
export default function Dashboard() {
  const { username } = useParams();
  const [data, setData] = useState([]);
  const location = useLocation();
  const tokens = location.state;

  useEffect(() => {
    const fetchTalks = async () => {
      const talksData = await getTalks(username, tokens);
      setData(talksData);
    };

    if (username && tokens) {
      fetchTalks();
    }
  }, [username, tokens]);
  const handleClick = (talk) => {
    localStorage.setItem("talk", JSON.stringify(talk));
  };

  return (
    <section className="dashboard-container">
      <div className="dash-header">
        <h1 className="dash-welcome">Welcome, {username}</h1>
        <h1 className="dash-first-name">{username[0]}</h1>
      </div>

      <div className="talks-container">
        <h1>Your Talks</h1>
        <div className="talks">
          {data.length > 0 ? (
            data.map((talk, index) => (
              <>
                <Link
                  key={index}
                  to="/?#main"
                  onClick={() => handleClick(talk)}
                >
                  <div className="saved-talk">
                    <h2>{talk.title}</h2>
                    <p>
                      {new Date(talk.time).toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "short",
                      })}
                    </p>{" "}
                  </div>
                </Link>
                {index != data.length - 1 ? (
                  <hr width="90%" height="1px" color="#31603d" />
                ) : (
                  <></>
                )}
              </>
            ))
          ) : (
            <p>You Haven't Saved a Talk Yet</p>
          )}
        </div>
      </div>
    </section>
  );
}
