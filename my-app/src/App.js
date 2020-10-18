import React from 'react';
import './App.css';
import CountUp from 'react-countup';

function App() {

  return (
    <div className="App">

      <header className="App-header">
          <h1>🌼 Your Carbon Footprint 🍃</h1>
        <div id="stats">
            <div class="subStat">
                <h1>
                    <CountUp start={0} end={4} duration={2.75}/>
                </h1>
                <p>Tons of carbon emissions produced</p>
            </div>

            <div class="subStat">
                <h1>
                    <CountUp start={0} end={2300} duration={2.75}/>
                </h1>
                <p>Total miles traveled</p>
            </div>

            <div class="subStat">
                <h1>
                    <CountUp start={0} end={10} duration={2.75}/>
                </h1>
                <p>Total number of purchases</p>
            </div>
        </div>
          <div id="offset">
              <h2>Cost to offset your emissions: $<CountUp start={0} end={165} duration={2.75}/></h2>
          </div>
      </header>
    </div>
  );
}

export default App;

