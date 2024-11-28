import React from "react";
import Intro from "../components/intro";
import WorkExample from "../components/work-examples/work-example";

export default function Work(){
    //intro message to pass into component
    const introMessage = `Previous work, project, and collaboration details.`;
    return(
        <>
            <hr className="text-dark w-25 mx-auto rounded" style={{ borderWidth: "5px" }}/>
                <h1 className="text-center">Work</h1>
            <hr className="text-dark w-25 mx-auto rounded mb-5" style={{ borderWidth: "5px" }}/>   
            <Intro message={introMessage} /> 
            <div className="mt-5 pt-5">
            {/*inserting the work examples from a component */}
            <WorkExample />
            </div>
        </>
    )
}