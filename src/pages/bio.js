import React from "react";
import Intro from "../components/intro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown, faAnglesLeft, faAnglesRight, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import reneRobot from '../images/rene-robot.png';
import catComputer from '../images/cat-computer.png';


export default function Bio() {
    //setting intro message to pass into Intro component
    const introMessage = `Who am I?`;


    return(
        <>
            <hr className="text-dark w-25 mx-auto rounded" style={{ borderWidth: "5px" }}/>
                <h1 className="text-center">Bio</h1>
            <hr className="text-dark w-25 mx-auto rounded mb-5" style={{ borderWidth: "5px" }}/>   
            <Intro message={introMessage} /> 
            <div className="w-75 mx-auto pt-5 mt-5 mb-3 d-flex align-items-center">
                <h2 style={{ transform: "rotate(4deg)" }} className="text-dark">
                    The Beginning
                </h2>
                {/*using fontawesome for icons on page */}
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
                >
                </div>
            </div>
                <div>
                    <p className="w-75 mx-auto font-parkinsons">
                        I learned the importance of teamwork, innovation, and dedication through school  extra-curriculars
                        like <a href="https://www.firstinspires.org/" target="blank" className="text-light-blue">FIRST Robotics</a>, musicals, band, accounting club, 
                        soccer, and more. I had the pleasure of continuing to mentor, teach, and inspire youth through these programs after graduation. Meeting people like
                        Dean Kamen, Woody Flowers, and countless other professionals in various fields motivated me to seek learning in various ways through creative and positive
                        problem solving!
                    </p>
                    <div className="d-flex align-items-center justify-content-center w-75 mt-4">
                        {/* Image Section */}
                        <div className="me-3 ms-2">
                            <img src={reneRobot} alt="rene-robot" className="w-100 rounded" style={{ maxWidth: '200px' }} />
                        </div>
                        <div className="d-flex align-items-center">
                            <FontAwesomeIcon icon={faAnglesLeft} className="me-2" />
                            <p className="mb-0">proof of robot shenanigans</p>
                        </div>
                    </div>
                </div>
            <div className="w-75 mx-auto pt-5 mt-5 mb-3 d-flex align-items-center">
                <h2 style={{ transform: "rotate(4deg)" }} className="text-dark">
                    The Middle
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
                >
                </div>
            </div>
            <div>
                    <p className="w-75 mx-auto font-parkinsons">
                        I started working towards a degree in Software Development after working retail for years. Through BYUI I have 
                        been able to almost complete my Bachelor's (est. graduation April 2025)! I started working contract work on front end development and UI/UX 
                        design early 2024 and haven't looked back.
                    </p>
                    <div className="d-flex align-items-center justify-content-end w-75 mx-auto mt-4">
                        {/* Text and Icon Section */}
                        <div className="d-flex align-items-center me-3">
                            <p className="mb-0 me-2">Moral support</p>
                            <FontAwesomeIcon icon={faAnglesRight} />
                        </div>

                        {/* Image Section */}
                        <div className="me-5">
                            <img
                            src={catComputer}
                            alt="cat-computer"
                            className="w-75 rounded"
                            style={{ maxWidth: '300px' }}
                            />
                        </div>
                    </div>
                </div>
                <div className="w-75 mx-auto pt-5 mt-5 mb-3 d-flex align-items-center">
                <h2 style={{ transform: "rotate(4deg)" }} className="text-dark">
                    The Future!
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
                >
                </div>
            </div>
            <div>
                    <p className="w-75 mx-auto font-parkinsons">
                        Future plans are to continue working in frontend development. I am strong in React JS but have collaborated closely
                        with backend using Amazon AWS for databases and API's. I enjoy using Figma and learning more about how to design spaces for
                        clients that accurately envision them or their company. I hope to be able to work with small businesses or individuals to give
                        them an online presence that exceeds expectations to help their goals become reality.
                    </p>
                    {/* call to action button links to email me */}
                    <div className="d-flex my-4 align-items-center justify-content-center">
                        <a href="mailto:bloomin.olive88@gmail.com" className="text-light bg-dark rounded shadow p-2 font-parkinsons">
                            Let's get started!
                        </a>
                    </div>
                </div>
        </>
    )
}