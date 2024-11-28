import React from "react";
import HomeHero from "../components/home-hero";
import Intro from "../components/intro";
import WorkSlider from "../components/work-slider";

export default function Home(){
    // Intro message is like the subtitle of the page under the heading. I am setting it on each page like this so I can pass it into the component. 
    const introMessage = `I love working with clients to create beautiful, functional presences on the web. 
    From the client to the backend development team, I excel in collaboration that meets goals, maintains vision, 
    and keeps a positive trajectory throughout each project.`;
    
    return(
        <>
        <div className="d-flex justify-content-center align-items-center">
            <div className="d-flex justify-content-between">
                <div className="d-flex flex-column justify-content-start align-items-start">
                    <hr className="text-dark w-25 mx-auto rounded" style={{ borderWidth: "5px" }}/>
                    <HomeHero />        
                    <hr className="text-dark w-25 mx-auto rounded" style={{ borderWidth: "5px" }}/>    
                </div>        
            </div>
       </div>
       <div className="my-5">
            <Intro message={introMessage}/>
        </div>
        {/*Slider carousel with work examples*/}
       <WorkSlider />
       </>
    )
}