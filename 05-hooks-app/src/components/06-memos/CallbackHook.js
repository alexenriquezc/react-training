import React, { useState, useCallback, useEffect } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  const increment = useCallback(() => {
    setCounter((c) => c + 1);
  }, [setCounter]);

  useEffect(() => {
      
  }, [increment])

  return (
    <div>
      <h1>CallbackHook: { counter }</h1>
      <hr />

      <ShowIncrement increment={increment}></ShowIncrement>
    </div>
  );
};
