import React, { useState, useEffect } from "react";
import "./layout.css";

const Layout = () => {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = 1;

    if (isRunning) {
      interval = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false); // Désactiver le compteur
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Compteur : {count}</h1>
      <div>
        <button onClick={handleStart} style={{ marginRight: "10px" }}>
          Démarrer
        </button>
        <button onClick={handleStop}>Arrêter</button>
      </div>
    </div>
  );
};

export default Layout;
