import React from "react";
import useKeyEvents from "../helper/useKeyEvents";

const App = () => {
  const [keyProps] = useKeyEvents("");

  const instructionText = () => {
    return "Press any key";
  };

  const keyCode = () => {
    const pressedKey = keyProps.keyCode === 32 ? "Space" : keyProps.key;
    return (
      <>
        <div>{keyProps.keyCode}</div>
        <small>key: {pressedKey}</small>
      </>
    );
  };

  return (
    <div className="keyCode">
      {keyProps ? keyCode() : instructionText()}
      <div className="author">
        with{" "}
        <span role="img" aria-label="code love">
          ❤️
        </span>
        <a target="_blanc" href="https://github.com/pranesh239">
          Pranesh
        </a>
      </div>
    </div>
  );
};

export default App;
