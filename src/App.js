import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);

  // const oneDayMs = 24 * 60 * 60 * 1000;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <Step step={step} setStep={setStep} />
      <Count count={count} setCount={setCount} step={step} />
      <Datum count={count} />
    </div>
  );
};

const Step = ({ step, setStep }) => {
  const handleIncrease = () => {
    setStep((step) => step + 1);
  };

  const handleDecrease = () => {
    if (step === 0) return;

    setStep((step) => step - 1);
  };

  return (
    <div>
      <button
        style={{ padding: "5px 15px", fontSize: "22px" }}
        onClick={handleDecrease}
      >
        -
      </button>
      <span style={{ fontSize: "22px", fontFamily: "sans-serif" }}>
        Step: {step}
      </span>
      <button
        style={{ padding: "4px 14px", fontSize: "22px" }}
        onClick={handleIncrease}
      >
        +
      </button>
    </div>
  );
};

const Count = ({ count, setCount, step }) => {
  const handleIncrease = () => {
    setCount((count) => count + step);
  };

  const handleDecrease = () => {
    setCount((count) => count - step);
  };
  return (
    <div>
      <button
        style={{ padding: "5px 15px", fontSize: "22px" }}
        onClick={handleDecrease}
      >
        -
      </button>
      <span style={{ fontSize: "22px", fontFamily: "sans-serif" }}>
        Count: {count}
      </span>
      <button
        style={{ padding: "4px 14px", fontSize: "22px" }}
        onClick={handleIncrease}
      >
        +
      </button>
    </div>
  );
};

const Datum = ({ count }) => {
  const currentDate = Date.now();
  const msInDay = 24 * 60 * 60 * 1000;
  const dateMs = currentDate + msInDay * count;
  const newDay = new Date(dateMs).toDateString();

  return (
    <>
      <span style={{ fontSize: "20px", fontFamily: "sans-serif" }}>
        {count > 0
          ? `${count} days from today is ${newDay}`
          : count < 0
          ? `${Math.abs(count)} days ago was ${newDay}`
          : `Today is ${newDay}`}
      </span>
    </>
  );
};

export default App;
