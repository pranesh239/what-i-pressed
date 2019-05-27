import React from "react";
import useKeyEvents from "../helper/useKeyEvents";

const App = () => {
  const [keyProps] = useKeyEvents("");
  console.log(keyProps);

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
    <div className="keyCode">{keyProps ? keyCode() : instructionText()}</div>
  );
};

export default App;
