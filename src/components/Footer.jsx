import React from "react";
import "./Footer.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
    useEffect (() => {
        AOS.init({duration:1000})
    },[]);
  return (
    <footer className="footer" data-aos="fade-up">
      <div className="container text-center">
        <p>&copy; Baraa.Almasri . All rights reserved.</p>
        <div className="footer-buttons">
          <a href="https://github.com/Bar4aMLG" className="btn btn-github" target="_blank">GitHub</a>
          <a href="https://www.linkedin.com/in/baraa-almasri-760703346/" className="btn btn-linkedin" target="_blank">LinkedIn</a>
          <a href="https://www.instagram.com/yourprofile" className="btn btn-instagram" target="_blank">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
