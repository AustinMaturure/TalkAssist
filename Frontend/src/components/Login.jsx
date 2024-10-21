import { useState } from "react";
import "../css/signup.css";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const userlogin = async (data) => {
    console.log(data);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}api/accounts/login/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        const userData = await response.json();
        console.log(userData);
        localStorage.setItem("user", JSON.stringify(userData));
        localStorage.setItem("loginTime", Date.now());
        navigate(`/dashboard/${userData.username}`, { state: userData });
      } else {
        if (response.status == 401) {
          setError("p-error");
          setMessage("Credentials Incorrect. Check Username or Password");
        } else {
          setError("p-accept");
        }
        console.error("Error: Server responded with status", response.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      username,
      password,
    };

    userlogin(data);
  };
  return (
    <>
      <section className="signup-container">
        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="signup-text">
            <h1>Log in</h1>
            <p>View, Add all your Talks</p>
          </div>
          <div className="log-message-cnt">
            <p className="log-message">{message}</p>
          </div>
          <p>Enter Your Name</p>
          <input
            type="text"
            value={username}
            placeholder="Name"
            className={`username-ipt ${error}`}
            onChange={(e) => {
              setUsername(e.target.value);
              setError("p-accept");
            }}
          />

          <p>Enter Password</p>
          <input
            type="password"
            value={password}
            placeholder="Password"
            className={`password-ipt ${error}`}
            onChange={(e) => {
              setPassword(e.target.value);
              setError("p-accept");
            }}
          />

          <button type="submit">Log In</button>
          <p>
            Don't Have an Account? <Link to="/signup">Sign Up</Link>
          </p>
        </form>
      </section>
    </>
  );
}
