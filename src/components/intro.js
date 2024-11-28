import React from "react";

// accepts prop message from pages and sets the styling for the intro
export default function Intro({ message }) {
  return (
    <p className="text-center fs-5 mx-auto mt-4 font-parkinsons" style={{ width: "65%" }}>
      {message}
    </p>
  );
}
