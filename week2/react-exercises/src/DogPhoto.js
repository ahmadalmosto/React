import React from "react";

export default function DogPhoto({ dog }) {
  return (
    <div key={dog}>
      <img src={dog} alt={dog} style={{ height: 200 }} />
    </div>
  );
}
