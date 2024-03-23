import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import HikeLogo from "../../assets/hike-logo.png";
import BlobScene from "../../assets/blob-scene-haikei.svg";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="home-showoff">
        <div className="home-brand-header">
          <div className="home-title">hike</div>
          <img src={HikeLogo} alt="Hike Logo" className="home-logo" />
        </div>
        <TypeAnimation
          cursor={false}
          sequence={[
            "Make applying to jobs easier.",
            2000,
            "Make applying to jobs more organized.",
            2000,
            "Make applying to jobs less stressful.",
            2000,
            "Make applying to jobs more efficient.",
            2000,
          ]}
          wrapper="h1"
          speed={50}
          repeat={Infinity}
          className="home-showoff-text"
        />
      </div>
      <div className="home-background"></div>{" "}
      <div className="home-card home-header">
        <div className="home-primary-card">
          <h3>Revolutionize the application process.</h3>
        </div>
        <div
          className="home-secondary-card home-login"
          onClick={() => navigate("/login")}
        >
          <h2>Login</h2>
          <h4>Already have an account?</h4>
        </div>
      </div>
      <div className="home-card home-header">
        <div
          className="home-secondary-card"
          onClick={() => navigate("/signup")}
        >
          <h2>Sign Up</h2>
          <h4>Don't have an account?</h4>
        </div>
        <div className="home-primary-card home-card home-secondary-level">
          <h2>Apply with your personal hikemail.</h2>
          <h3>Track your applications with ease.</h3>
        </div>
      </div>
    </div>
  );
}
