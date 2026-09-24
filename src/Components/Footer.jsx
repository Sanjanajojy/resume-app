import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
function Footer() {
  return (
    <div>
    

      <div className="container-fluid bg-dark ">
        <div className="row  text-light p-4">
          <div className="col-lg-4 p-3 ">
            <h2>AI rBuilder</h2>
            <p>An Al rBuilder suggest job specific keywords, professional summaries, and skill recommendations to make the resume more effective and ATS (Applicant Tracking System) friendly. The main goal of the Al Powered Resume Builder is to simplify the resume creation process and help Job seekers build professional, well-structured resumes in a few minutes.</p>
          </div>
          <div className="col-lg-4"></div>
          <div className="col-lg-4 p-3">
            <h3>Contact Us</h3>
            <p>resumebuilder@gmail.com</p>
            <p>9876543210</p>
            <p>Connect With Us</p>
            <FaInstagram /><FaFacebook /><FaWhatsapp />

          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Footer