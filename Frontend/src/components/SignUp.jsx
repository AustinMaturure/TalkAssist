import { useEffect, useState } from "react";
import "../css/signup.css";
import { Link, useNavigate } from "react-router-dom";
export default function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      const user = JSON.parse(storedUser);
      const loginTime = localStorage.getItem("loginTime");
      if (loginTime) {
        const currentTime = Date.now();
        const timeDifference = currentTime - parseInt(loginTime, 10);

        if (timeDifference > 1800000) {
          localStorage.removeItem("user");
          localStorage.removeItem("loginTime");
          navigate("/login");
        } else {
          navigate(`/dashboard/${user.username}`, { state: user });
        }
      }
    }
  }, []);
  const usersignup = async (data) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}api/accounts/signup/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        const status = await response.json();
        console.log(status.status);
        window.location.href = `/dashboard/${username}`;
      } else {
        console.error("Error: Server responded with status", response.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      console.error("Passwords do not match");
      return;
    }

    const data = {
      username,
      email,
      password,
    };

    usersignup(data);
  };
  return (
    <>
      <section className="signup-container">
        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="signup-text">
            <h1>Sign Up</h1>
            <p>And Keep all your talks organised</p>
          </div>
          <p>Enter Your Name</p>
          <input
            type="text"
            value={username}
            placeholder="Name"
            onChange={(e) => setUsername(e.target.value)}
          />
          <p>Enter E-mail</p>
          <input
            type="email"
            value={email}
            placeholder="e-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
          <p>Enter Password</p>
          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <p>Enter Password Again</p>
          <input
            type="password"
            value={confirmPassword}
            placeholder="Password again"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button type="submit">Sign Up</button>
          <p>
            Already Have an Account? <Link to="/login">Login</Link>
          </p>
        </form>
      </section>
    </>
  );
}
