import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Add 1</button>
      <h2>{count}</h2>
      <Count count={count} />
    </>
  );
}
function Count({ count }) {
  return count > 10 ? `It's higher than 10!` : "Keep counting...";
}
export default Counter;
