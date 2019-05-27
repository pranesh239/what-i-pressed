import { useState, useEffect } from "react";

const useKeyEvents = initialState => {
  const [keyProps, setKeyProps] = useState(initialState || "");

  useEffect(() => {
    document.addEventListener("keyup", e => {
      setKeyProps(e);
    });
  });
  return [keyProps];
};

export default useKeyEvents;
