import React from 'react';
import './ThreeBoxes.css'; // Import your CSS file
import HikeApply from "../../assets/hikeApply.png";
import HikeStatus from "../../assets/hikeStatus.png";
import HikeAccept from "../../assets/hikeAccept.png";

const ThreeBoxes = () => {
  return (
    <div className="container">
      <div className="stepBox">
        <div className="words" style ={{marginTop: "15px"}}>APPLY</div>
        <img src={HikeApply} alt="Hike Apply" className="hikeApply" style={{ height:  "45%", width: "60%", margin: "0 auto" }} />
        <p>Submit job applications via your hikemail</p>
      </div>
      <div className="stepBox">
        <div className="words" style ={{marginTop: "15px"}}>TRACK</div>
        <img src={HikeStatus} alt="Hike Status" className="hikeStatus" style={{ height:  "45%", width: "60%", margin: "0 auto" }} />
        <p>Use Hike to track and organize your applications by company, role, and status</p>
      </div>
      <div className="stepBox">
        <div className="words" style ={{marginTop: "15px"}}>ACCEPT</div>
        <img src={HikeAccept} alt="Hike Accept" className="hikeAccept" style={{ height:  "45%", width: "60%", margin: "0 auto" }} />
        <p>Accept your job offer!</p>
      </div>
    </div>
  );
};

export default ThreeBoxes;