import React from "react";
import hero from "../assets/pexels-stywo-1054218.jpg";
import "../styles/hero.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
function Home() {
  return (
    <>
      <Header />
      <section className="hero">
        <div className="hero-text">
          <h1 className="hero-title">Wander-Log</h1>
          <p className="hero-desc">Capture Your Journeys, Relive the Moments</p>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;
