import React, { useState } from "react";
import Intro from "../components/intro";
import supabase from "../supabase-client"; // Import your Supabase client
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight} from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  // Intro message
  const introMessage = `Feel free to reach out with any questions or project inquiries.`;
  
  // Form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    topic: "",
    message: ""
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const okClick = () => {
    setSuccessMessage("");
  }

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstName, lastName, email, topic, message } = formData;

    try {
      // Insert data into Supabase
      const { error } = await supabase.from("Messages").insert([
        {
          first_name: firstName,
          last_name: lastName,
          email: email,
          topic: topic,
          message: message
        }
      ]);

      if (error) throw error;

      // Clear form and show success message
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        topic: "",
        message: ""
      });
      setSuccessMessage("Your message has been sent successfully! Check your email for a message in the next 48 hours.");
    } catch (error) {
      setErrorMessage("An error occurred while sending your message. Please try again.");
    }
  };

  return (
    <>
      <hr className="text-dark w-25 mx-auto rounded" style={{ borderWidth: "5px" }} />
      <h1 className="text-center">Contact Me</h1>
      <hr className="text-dark w-25 mx-auto rounded mb-5" style={{ borderWidth: "5px" }} />
      <Intro message={introMessage} />
      
      <div className="container mt-5 bg-english-violet text-light rounded p-2">
        <form onSubmit={handleSubmit} className="px-3 font-parkinsons">
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">First Name</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="topic" className="form-label">Topic</label>
            <select
              className="form-select"
              id="topic"
              name="topic"
              value={formData.topic}
              onChange={handleChange}
              required
            >
              <option value="">Choose a topic...</option>
              <option value="Web Design">Web Design</option>
              <option value="Logo Design">Logo Design</option>
              <option value="Frontend Development">Frontend Development</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn bg-myrtle-green text-light font-parkinsons">Submit <FontAwesomeIcon icon={faAnglesRight} /></button>
        </form>

        {/* Success and Error Messages */}
        
        {errorMessage && <p className="text-danger mt-3">{errorMessage}</p>}
      </div>
      {successMessage && 
          <>
            <div className="bg-light rounded shadow position-absolute top-50 start-50 translate-middle z-2">
              <p className="font-parkinsons text-dark text-center mx-auto mt-2">
                {successMessage}
              </p>
              <div className="d-flex justify-content-end align-items-end me-2 mb-2">
                <button onClick={okClick} className="btn btn-myrtle-green text-light font-parkinsons">OK <FontAwesomeIcon icon={faAnglesRight} /></button>
              </div>
            </div>
            <div className="overlay"></div>
         
          </>
        }
    </>
  );
}
