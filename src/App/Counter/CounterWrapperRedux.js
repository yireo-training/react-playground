import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Counter from "./Counter";

const CounterWrapper = () => {
  const counter = useSelector(state => state);
  const dispatch = useDispatch();

  const setCounter = () => {
    dispatch({ type: 'INC', payload: 2 })
  }

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
