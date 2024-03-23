import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import HikeLogo from "../../assets/hike-logo.png";
import Stacked from "../../assets/stacked-bg.svg";

export default function Home() {
  const navigate = useNavigate();
  const[isOpen, setOpen] = React.useState(false);
  const onButtonClick = () => {
    setOpen(!isOpen);
  };

  function handleScroll() {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0, 
      behavior: 'smooth',
    });
  }

  return (
    <div className="home-container">
      <div className="home-showoff">
        <div className="home-brand-header">
          <div className="home-title">HIKE</div>
          <img src={HikeLogo} alt="Hike Logo" className="home-logo" />
          <div>
          <button className = "get-started" type="button" onClick={onButtonClick}>GET STARTED</button>
          {isOpen && <div>Content</div>}
        </div>
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
          <h2>Revolutionize the application process.</h2>
        </div>
        <div
          className="home-secondary-card home-login"
          onClick={() => navigate("/login")}
        >
          <h4>Already have an account?</h4>
          <h2>Login</h2>
        </div>
      </div>
      <div className="home-card home-header">
        <div
          className="home-secondary-card"
          onClick={() => navigate("/signup")}
        >
          <h4>Don't have an account?</h4>
          <h2>Sign Up</h2>
        </div>
        <div className="home-primary-card home-card home-secondary-level">
          <h2>Apply with your personal hikemail.</h2>
          <h3>Track your applications with ease.</h3>
        </div>
      </div>
    </div>
  );
}
