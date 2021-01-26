import React from "react";

export default function Button({ getDogPhoto }) {
  return (
    <div>
      <button onClick={getDogPhoto}>Get Dog</button>
    </div>
  );
}
