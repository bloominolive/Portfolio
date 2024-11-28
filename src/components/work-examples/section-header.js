import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";

//accepts title prop to get whatever the title is from the section and sets styles here
export default function SectionHeader({ title }) {
  return (
    <div className="w-75 mx-auto pt-5 mt-5 mb-3 d-flex align-items-center">
      <h2 style={{ transform: "rotate(4deg)" }} className="text-dark">
        {title}
      </h2>
      <FontAwesomeIcon
        icon={faAnglesDown}
        className="mx-4 mt-4 text-dark"
        style={{ transform: "rotate(8deg)" }}
      />
      <div
        className="ms-auto mt-4 me-2"
        style={{
          width: "25%",
          height: "5px",
          borderRadius: "2px",
          backgroundColor: "#B0B5B7",
        }}
      ></div>
    </div>
  );
}
