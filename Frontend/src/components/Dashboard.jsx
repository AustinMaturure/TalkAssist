import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../css/dashboard.css";

export default function Dashboard() {
  const { username } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const getTalks = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}api/talks/`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              username: `${username}`,
            },
          }
        );

        const result = await response.json();
        console.log(result);
        setData(result);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    getTalks();
  }, [username]);

  return (
    <section className="dashboard-container">
      <div className="dash-header">
        <h1 className="dash-welcome">Welcome, {username}</h1>
        <h1 className="dash-first-name">{username[0]}</h1>
      </div>
      <div className="dash-placeholder">
        <h1>We're Getting Things Ready For You...</h1>
        <p>Soon you'll be able to save all your talks here</p>
      </div>

      {/*<div className="talks-container">
              <h1>Your Talks</h1>
              {data.length > 0 ? (
                  data.map((talk, index) => (
                      <div key={index} className="talk">
                          <h2>{talk.title}</h2>
                          <p>{talk.time}</p>
                      </div>
                  ))
              ) : (
                  <p>You Haven't Saved a Talk Yet</p>
              )}
          </div>*/}
    </section>
  );
}
