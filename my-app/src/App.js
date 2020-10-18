import React from "react";
import "./App.css";
import CountUp from "react-countup";
import { writeData, readData } from "./firebase/functions";

function App() {
  var emissions = 729;
  var miles = 2374;
  var purchases = 27;
  var offsetCost = 168;

  writeData();
  readData();

  const renderHeader = () => (
    <h1>
      <span role="img" aria-label="flower">
        🌼
      </span>
      Your Carbon Footprint{" "}
      <span role="img" aria-label="leaf">
        🍃
      </span>
    </h1>
  );

  const renderEmissionStat = () => (
    <div class="subStat">
      <h1>
        <CountUp start={0} end={emissions} duration={2.75} />
      </h1>
      <p>Kilograms of carbon emissions produced</p>
    </div>
  );

  const renderMileageStat = () => (
    <div class="subStat">
      <h1>
        <CountUp start={0} end={miles} duration={2.75} />
      </h1>
      <p>Total miles traveled</p>
    </div>
  );

  const renderPurchasesStat = () => (
    <div class="subStat">
      <h1>
        <CountUp start={0} end={purchases} duration={2.75} />
      </h1>
      <p>Total number of purchases</p>
    </div>
  );

  const renderOffsetStat = () => (
    <div id="offset">
      <h2>
        Cost to offset your emissions: $
        <CountUp start={0} end={offsetCost} duration={2.75} />
      </h2>
    </div>
  );

  return (
    <div className="App">
      <header className="app-header">
        {renderHeader()}
        <div id="stats">
          {renderEmissionStat()}
          {renderMileageStat()}
          {renderPurchasesStat()}
        </div>
        {renderOffsetStat()}
      </header>
    </div>
  );
}

export default App;
