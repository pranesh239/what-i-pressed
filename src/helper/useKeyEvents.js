import { useState, useEffect } from "react";

const useKeyEvents = initialState => {
  const [keyProps, setKeyProps] = useState(initialState || "");

  useEffect(() => {
    document.addEventListener("keydown", e => {
      if (e.keyCode === 9) e.preventDefault();
      setKeyProps(e);
    });
  }, []);
  return [keyProps];
};

export default useKeyEvents;
