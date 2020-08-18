import React from "react";

const Slow = React.lazy(() => import("./Slow"));

const SlowLoader = () => {
  return (
    <>
    <React.Suspense fallback={<div>Loading ...</div>}>
      <Slow />
    </React.Suspense>
    </>
  );
};

export default SlowLoader;
