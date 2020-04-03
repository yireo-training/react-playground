import React from "react";
import Greeting from "../Home/Greeting";
import SlowLoader from "../Home/SlowLoader";

const HomePage = () => {
  return (
    <div>
      <h1>
        <Greeting name="Jisse" />
      </h1>

      <SlowLoader />
    </div>
  );
};

export default HomePage;
