import React, { useEffect } from "react";
import "./Dashboard.css";
import Box from '@mui/material/Box';
import axios from "axios"

interface Application {
  id: number,
  position: string,
  user: string,
  status: number,
  company: string
}

interface AppProps {
  id: number;
  position: string;
  status: number;
  company: string;
}

let filtered:any;

const App : React.FC<AppProps> = ({id, position, status, company}) => 
<li key={id}>
<div className="application-instance">
<hr className="fuckyou"/>
  <Box
  height={100}
  width={1000}
  my={4}
  display="flex"
  alignItems="center"
  p={2}
  className = "box">
  {/* // borderRadius='30px'
  // sx={{ border: '3px solid grey' }}> */}
    <div className="application-info">
      <h2 className="company-name">{company}</h2>
      <text className="position">Position: {position != '' ? "Not found" : position} </text>
    </div>
    <div className="application-status">
        
        <div className="stage">
        <div
            style={{
              backgroundColor: `${status === 0 ? "#a6bd9e" : null}`,
              height: "15px",
              width: "15px",
              border: "3px solid darkgray",
              borderRadius: "50%",
            }}
            className="bubble"
          >
          </div>
          <div style = {{textAlign:"center"}} className="bubble-text">
            <text> Under Review </text>
          </div>
        </div>
       <div className="stage">
          <div
            style={{
              backgroundColor: `${status === 1 ? "#a6bd9e" : null}`,
              height: "15px",
              width: "15px",
              border: "3px solid darkgray",
              borderRadius: "50%",
            }}
            className="bubble"
          >
          </div>
          <div className="bubble-text">
            <text> Screening </text>
          </div>
       </div>
          
        <div className="stage">
        <div
            style={{
              backgroundColor: `${status === 2 ? "#a6bd9e" : null}`,
              height: "15px",
              width: "15px",
              border: "3px solid darkgray",
              borderRadius: "50%",
            }}
            className="bubble"
          >
          </div>
          <div className="bubble-text">
            <text> Interview </text>
          </div>
        </div>
          
        <div className="stage">
        <div
            style={{
              backgroundColor: `${status === 3 ? "#a6bd9e" : null}`,
              height: "15px",
              width: "15px",
              border: "3px solid darkgray",
              borderRadius: "50%",
            }}
            className="bubble"
          >
          </div>
          <div className="bubble-text">
            <text> Acceptance </text>
          </div>
        </div>
         
        <div className="stage">
        <div
            style={{
              backgroundColor: `${status === 4 ? "#fa8072" : null}`,
              height: "15px",
              width: "15px",
              border: "3px solid darkgray",
              borderRadius: "50%",
            }}
            className="bubble"
          >
          </div>
          <div className="bubble-text">
            <text> Rejection </text>
          </div>
        </div>
      </div>  
  </Box>
  </div>
</li>

export default function Dashboard() {
  const [applications, setApplications] = React.useState<Application[]>([]);
  useEffect(() => {

    let entry1 = {
      id: 1,
      position: "SWE",
      user: "kshitij",
      status: 1,
      company: "ANB Systems",
    }
    let entry2 = {
      id: 2,
      position: "SWE",
      user: "sum",
      status: 2,
      company: "Lockheed Martin",
    }
    let entry3 = {
      id: 3,
      position: "Business Analyst",
      user: "urmommy",
      status: 3,
      company: "Figma",
    }

    let entry4 = {
      id: 4,
      position: "Data Analyst",
      user: "weiuuhprfuhi p iu",
      status: 4,
      company: "HEB",
    }

    let entry5 = {
      id: 5,
      position: "Software Engineer",
      user: "setge hwrhg b p iu",
      status: 0,
      company: "JP Morgan and Chase",
    }

    axios.get("https://api.hikemail.net/users/getApplications/3")
      .then((res: any) => {
        console.log(res)
        setApplications(res.data.rows)
      })
      .catch((err: Error) => {
        console.error(err)
      })
  },[]);


  return (
    <div className="dash-page">
      <div className="dash-title">
      <h1> hike </h1>
      <div className="application-display">
      <h1>Applications</h1>
      <ul className="mapped-applications">
        {applications.map(App)}
      </ul>
      </div>
    </div>
    </div>
    
  );
}
