import "../css/home.css";
import Navbar from "./Navbar";

function Home() {
  return (
    <>
      <section className="home" id="home">
        <Navbar />
        <div className="hero-text">
          <h1>Make Every Talk Effortless,</h1>
          <h1>One Card at a Time</h1>
        </div>
        <hr color="#31603d" />
      </section>
    </>
  );
}

export default Home;
