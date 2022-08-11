import React, { useState } from 'react';
import './App.css';

function App() {
  const [size, setSize] = useState([1000, 500]);
  return (
    <div className="App">
      <header>
        <h1>SWIPER-EASE</h1>
      </header>
      <main>
        <div className="form">
          <label className="input">
            Width container: {size[0]}px
            <input
              type="range"
              min={50}
              max={1500}
              step={1}
              onChange={(e) => {
                setSize([Number(e.target.value), size[1]]);
              }}
              value={size[0]}
            />
          </label>
          <label className="input">
            Hight container: {size[1]}px
            <input
              type="range"
              min={50}
              max={1000}
              step={1}
              onChange={(e) => {
                setSize([size[0], Number(e.target.value)]);
              }}
              value={size[1]}
            />
          </label>
        </div>
        <div
          className="container__swiper"
          style={{
            width: `${size[0]}px`,
            height: `${size[1]}px`,
          }}></div>
      </main>
    </div>
  );
}

export default App;
