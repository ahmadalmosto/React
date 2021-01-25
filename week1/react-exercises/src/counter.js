import React, { useState } from "react";

const CountButton = ({ count, setCount }) => {
  return (
    <>
      <button onClick={() => setCount(count + 1)}>Add 1</button>
    </>
  );
};

const FeedBack = ({ count }) => {
  return count > 10 ? `It's higher than 10!` : "Keep counting...";
};

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CountButton count={count} setCount={setCount} />
      <Count count={count} />
      <FeedBack count={count} />
    </>
  );
}

function Count({ count }) {
  return (
    <>
      <h1>{count}</h1>
    </>
  );
}
export default Counter;
