import React from "react";

//takes the props from the work example to insert them into each row accordingly and sets styles.
export default function WorkRow({ text, image, imageFirst = false }) {
  return (
    <div className="row align-items-center mt-5">
      {imageFirst && (
        <div className="col-md-8 text-center">
          <a
            href={image.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ cursor: "pointer" }}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="img-fluid w-75 rounded"
            />
          </a>
        </div>
      )}
      <div className={`col-md-4 text-${imageFirst ? "start" : "end"} text-center`}>
        <p className="text-dark">{text}</p>
      </div>
      {!imageFirst && (
        <div className="col-md-8 text-center">
          <a
            href={image.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ cursor: "pointer" }}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="img-fluid w-75 rounded"
            />
          </a>
        </div>
      )}
    </div>
  );
}
