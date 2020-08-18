import React from "react";

function pausecomp(millis) {
  var date = new Date();
  var curDate = null;
  do {
    curDate = new Date();
  } while (curDate - date < millis);
}

pausecomp(1500);

const Slow = () => {
  return <div>Slow content</div>;
};

export default Slow;
