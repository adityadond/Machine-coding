import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [boxColors, setBoxColors] = useState(Array(7).fill("yellow"));
  const [clickedIndexes, setClickedIndexes] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => {
    const newBoxColors = [...boxColors];
    newBoxColors[index] = "green";
    setBoxColors(newBoxColors);
    setClickedIndexes((prevClicked) => [...prevClicked, index]);
  };

  useEffect(() => {
    if (clickedIndexes.length === 7) {
      const timer = setInterval(() => {
        if (currentIndex < 7) {
          const newBoxColors = [...boxColors];
          newBoxColors[clickedIndexes[currentIndex]] = "yellow";
          setBoxColors(newBoxColors);
          setCurrentIndex((prevIndex) => prevIndex + 1);
        } else {
          clearInterval(timer);
        }
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [clickedIndexes, currentIndex, boxColors]);

  return (
    <div className="container">
      <div className="row">
        <div
          className="box"
          style={{ backgroundColor: boxColors[0] }}
          onClick={() => handleClick(0)}
        ></div>
        <div
          className="box"
          style={{ backgroundColor: boxColors[1] }}
          onClick={() => handleClick(1)}
        ></div>
        <div
          className="box"
          style={{ backgroundColor: boxColors[2] }}
          onClick={() => handleClick(2)}
        ></div>
      </div>
      <div className="row">
        <div
          className="box"
          style={{ backgroundColor: boxColors[3] }}
          onClick={() => handleClick(3)}
        ></div>
        <div
          className="box"
          style={{ backgroundColor: boxColors[4] }}
          onClick={() => handleClick(4)}
        ></div>
        <div
          className="box"
          style={{ backgroundColor: boxColors[5] }}
          onClick={() => handleClick(5)}
        ></div>
        <div
          className="box"
          style={{ backgroundColor: boxColors[6] }}
          onClick={() => handleClick(6)}
        ></div>
      </div>
    </div>
  );
}

export default App;
