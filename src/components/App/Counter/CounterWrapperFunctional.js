import React, { useState } from "react";
import Counter from "./Counter";

const CounterWrapper = () => {
  const [counter, setCounter] = useState(0);
  return (
    <Counter
      counter={counter}
      onClickHandler={() => {
        setCounter(counter + 1);
      }}
    />
  );
};

export default CounterWrapper;
