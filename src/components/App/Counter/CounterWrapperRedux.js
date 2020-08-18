import React from "react";
import Counter from "./Counter";
import useCounter from "../../../store/hooks";

const CounterWrapper = () => {
  const [counter, setCounter] = useCounter();

  return (
    <Counter
      counter={counter}
      onClickHandler={() => {
        setCounter(4);
      }}
    />
  );
};

export default CounterWrapper;
