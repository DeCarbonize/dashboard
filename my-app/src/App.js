import React from 'react';
import './App.css';
import CountUp from 'react-countup';

function App() {
    var emissions = 4;
    var miles = 2300;
    var purchases = 10;
    var offsetCost = 165;

  return (
    <div className="App">

      <header className="App-header">
          <h1>🌼 Your Carbon Footprint 🍃</h1>
        <div id="stats">
            <div class="subStat">
                <h1>
                    <CountUp start={0} end={emissions} duration={2.75}/>
                </h1>
                <p>Tons of carbon emissions produced</p>
            </div>

            <div class="subStat">
                <h1>
                    <CountUp start={0} end={miles} duration={2.75}/>
                </h1>
                <p>Total miles traveled</p>
            </div>

            <div class="subStat">
                <h1>
                    <CountUp start={0} end={purchases} duration={2.75}/>
                </h1>
                <p>Total number of purchases</p>
            </div>
        </div>
          <div id="offset">
              <h2>Cost to offset your emissions: $<CountUp start={0} end={offsetCost} duration={2.75}/></h2>
          </div>
      </header>
    </div>
  );
}

export default App;

