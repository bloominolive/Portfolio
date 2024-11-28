import React from "react";


export default function HomeHero(){

    //More of a title than a hero, but it is supposed to be a main focal point and info spot of the home page.

    return(
        <>
        <div className="d-flex ms-4">
        <div
            className="rounded me-5 mt-5"
            style={{
                width: "5px", // Thickness of the line
                height: "180px", // Length of the line
                backgroundColor: "#B0B5B7",
            }}
            >
        </div>
        <div className="container w-100 me-4 text-dark d-flex flex-column justify-content-center align-items-start" style={{height: '200px'}}>
            <h1 className='ms-3 mb-3' style={{transform: 'rotate(5deg)'}}>Hello</h1>
            <h4>I'm René Olive, a frontend web developer <br/> specializing in React JS and Bootstrap.</h4>
        </div>
        <div
            className="rounded ms-5 mt-5"
            style={{
                width: "5px", // Thickness of the line
                height: "180px", // Length of the line
                backgroundColor: "#B0B5B7",
            }}
            >
        </div>

      </div>
      </>
    )
}