import React from "react";
import gifLogo from "../images/tor.gif"; // Adjust the path to your GIF file
import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate(); // Initialize the navigate function
    // Navbar is responsive/dynamic and links to home on my picture or name. has the other pages linked as well.
    return (
        <div className="fixed-top">
            <nav className="navbar navbar-light bg-english-violet py-2" style={{ height: "75px" }}>
                <div className="container-fluid d-flex flex-column align-items-center">

                    {/* Navigation Links and Name */}
                    <div className="d-flex w-100 justify-content-between align-items-center pe-md-4 pe-2">
                        <button
                            className="navbar-brand text-light ps-1 ps-md-4 fs-3 btn btn-link"
                            onClick={() => navigate("/")}
                        >
                            René Olive
                        </button>
                        {/* link items for other pages*/}
                        <ul className="navbar-nav flex-row pe-1 pe-md-4">
                            <li className="nav-item d-flex align-items-center">
                                <button
                                    className="nav-link text-light fs-4 me-1 btn btn-link"
                                    onClick={() => navigate("/bio")}
                                >
                                    Bio
                                </button>
                                <span className="nav-separator ms-2 ms-md-3 me-2 me-md-3">|</span>
                            </li>
                            <li className="nav-item d-flex align-items-center">
                                <button
                                    className="nav-link text-light me-1 fs-4 btn btn-link"
                                    onClick={() => navigate("/work")}
                                >
                                    Work
                                </button>
                            </li>
                        </ul>

                    </div>
                    {/* Centered Logo */}
                    <img
                        src={gifLogo}
                        alt="Logo"
                        style={{ height: "150px" }}
                        className="rounded-circle navbar-logo shadow"
                        onClick={() => navigate("/")}
                    />
                </div>
            </nav>
        </div>
    );
}
