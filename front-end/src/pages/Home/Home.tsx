import React from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom'
import StackedWaves from '../../assets/stacked-peaks-haikei.svg'


export default function Home() {
  const navigate = useNavigate()
  
  return (
    <div className="home-container">
      <div className="home-background"></div>{" "}
      <div className="home-card home-header">
        <div className="home-primary-card">
          <h1>Hike</h1>
          <h3>Revolutionize how you apply.</h3>
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
