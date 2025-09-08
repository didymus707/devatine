import { useState } from "react";
import { Timer } from "./components/layout/timer";

function App() {
  return (
    <>
      <div className="app-container">
        <div className="header">
          <h1>Time Block Manager</h1>
          <p>
            Create a focused time blocks with sequential tasks to maximize your
            productivity
          </p>
        </div>

        <div className="time-block-wrapper">
          <button className="time-block-btn">Start Session</button>
        </div>
      </div>
      <Timer />
    </>
  );
}

export default App;
