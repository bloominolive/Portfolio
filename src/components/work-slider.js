import React from "react";
import { useNavigate } from "react-router-dom";
import bfScreenshot from "../images/bf-screenshot.png";
import flapmapScreenshot from "../images/flapmap-screenshot.png";
import orcocScreenshot from "../images/orcoc-screenshot.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Bootstrap JS
import { faAnglesDown, faAnglesRight } from "@fortawesome/free-solid-svg-icons";

export default function WorkSlider() {
    const navigate = useNavigate();

    // carousel showing a snapshot of work examples. each image links to the website of work. 
    //Used a header with down arrows to point to it and at the bottom have a link to see more 
    //details that brings them to the work page so they can see more details on each site.
    return (
        <>
        <div className="w-75 mx-auto pt-4 mb-3 d-flex">
            <h2 style={{transform: 'rotate(4deg)'}}>
                Favorite Recent Work
            </h2>
            {/* using Fontawesome for icons*/}
            <FontAwesomeIcon icon={faAnglesDown} className="mx-4 mt-4" style={{transform: 'rotate(8deg)'}} /> 
            <div className="ms-auto mt-4 me-2" style={{ width: '25%', height: '5px', borderRadius: '2px', backgroundColor: "#B0B5B7", }}></div>
        </div>
        <div id="carouselExampleCaptions" className="carousel slide bg-myrtle-green rounded w-75 mx-auto">
        {/* Indicators */}
        <div className="carousel-indicators">
            <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
            ></button>
            <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
            ></button>
            <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
            ></button>
        </div>
    
        {/* Carousel Items */}
        <div className="carousel-inner text-center">
            <div className="carousel-item active">
                <div className="d-flex justify-content-center align-items-center" style={{ height: "500px" }}>
                    <a href="https://bloominolive.github.io/wdd230/bountiful/index.html" target="_blank" rel="noopener noreferrer" >
                        <img src={bfScreenshot} className="d-block" alt="bountiful-foods" style={{ maxHeight: "90%", maxWidth: "100%" }} />
                    </a>
                </div>
                <div className="carousel-caption d-none d-md-block">
                    <div className="bg-dark bg-opacity-75 p-3 rounded">
                    <h5>Bountiful Foods</h5>
                    <p>Bright and fun- the perfect blend of customer and company.</p>
                    </div>
                </div>
            </div>
            <div className="carousel-item">
            <div className="d-flex justify-content-center align-items-center" style={{ height: "500px" }}>
                <a href="https://bloominolive.github.io/wdd230/chamber/index.html" target="_blank" rel="noopener noreferrer" >
                    <img src={orcocScreenshot} className="d-block" alt="ORCoC" style={{ maxHeight: "100%", maxWidth: "100%" }} />
                </a>
            </div>
            <div className="carousel-caption d-none d-md-block">
                <div className="bg-dark bg-opacity-75 p-3 rounded">
                <h5>Orlando Chamber of Commerce</h5>
                <p>A beautiful blend of colors with seamless function for visitors.</p>
                </div>
            </div>
            </div>
            <div className="carousel-item">
            <div className="d-flex justify-content-center align-items-center" style={{ height: "500px" }}>
                <a href="https://main--delicate-cobbler-f882fd.netlify.app/index.html" target="_blank" rel="noopener noreferrer" >
                    <img src={flapmapScreenshot} className="d-block" alt="flapmap" style={{ maxHeight: "90%", maxWidth: "100%" }} />
                </a>
            </div>
            <div className="carousel-caption d-none d-md-block">
                <div className="bg-dark bg-opacity-75 p-3 rounded">
                    <h5>FlapMap</h5>
                    <p>Join local birdwatchers, log sightings, and explore local bird varieties.</p>
                </div>
            </div>
            </div>
        </div>
    
        {/* Navigation Buttons */}
        <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
        >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
        >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
        </div>
        <div className="w-75 mx-auto pt-4 mb-3 d-flex">
            <div className="me-auto mt-3 ms-2" style={{ width: '25%', height: '5px', borderRadius: '2px', backgroundColor: "#B0B5B7", }}></div>
            <h2 style={{transform: 'rotate(-4deg)', cursor: 'pointer'}} onClick={() => navigate("/work")} className="text-decoration-underline">
               See Work Details
            </h2>
            <FontAwesomeIcon icon={faAnglesRight} className="mx-4" style={{transform: 'rotate(-8deg)', cursor: 'pointer'}} onClick={() => navigate("/work")}/> 
        </div>
        </>
    );      
}
