import React, { useState, useEffect } from "react";

const getTime = () => new Date().toLocaleTimeString();

const Clock = () => {
  const [time, setTime] = useState(getTime());

  useEffect(() => {
    const timer = setInterval(() => setTime(getTime()), 1000);
    return function() {
      clearInterval(timer);
    }
  }, []);

  return <h2>It is {time}.</h2>;
};

export default Clock;
