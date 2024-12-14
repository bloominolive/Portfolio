import React from "react";

//links to my email and github, responsive.
export default function Footer() {
    return (
        <div className="fixed-bottom">
            <nav className="navbar navbar-light bg-english-violet py-3 px-5" style={{ height: "75px" }}>
                <div className="container-fluid d-flex justify-content-between align-items-center text-light">
                   
                    {/* Email Section */}
                    <div>
                        <a href="mailto:bloomin.olive88@gmail.com" className="text-light text-decoration-none">
                            bloomin.olive88@gmail.com
                        </a>
                    </div>


                    {/* Name Section */}
                    <div>
                        <a href="/login" className="mb-0 text-decoration-none" style={{cursor: 'default', color: 'inherit'}}>René Olive</a>
                    </div>

                    
                    {/* LinkedIn Section */}
                    <div>
                        <a
                            href= "https://www.linkedin.com/in/renelolive"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-light text-decoration-none"
                        >
                            LinkedIn: https://www.linkedin.com/in/renelolive/
                        </a>
                    </div>


                    {/* GitHub Section */}
                    <div>
                        <a
                            href="https://github.com/bloominolive"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-light text-decoration-none"
                        >
                            GitHub: https://github.com/bloominolive
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    );
}
