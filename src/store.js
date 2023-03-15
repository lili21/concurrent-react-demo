import { useEffect, useState } from "react";

export default function createStore(initialState) {
  let currentState = initialState;

  const listeners = new Set();
  const getState = () => currentState;
  const setState = (nextState) => {
    if (typeof nextState === "function") {
      currentState = nextState(getState());
    } else {
      currentState = nextState;
    }
    listeners.forEach((fn) => fn(getState()));
  };
  const subscribe = (cb) => {
    listeners.add(cb);
    return () => listeners.delete(cb);
  };

  return () => {
    const [value, setValue] = useState(getState());

    useEffect(() => {
      const unsub = subscribe((nextState) => {
        setValue(nextState);
      });
      return unsub;
    }, []);

    return [value, setState];
  };
}
