import React from "react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaUser,
} from "react-icons/fa";
import id from "./assests/id.jpg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          scroll-behavior: smooth;
        }

        body {
          font-family: 'Poppins', sans-serif;
          background-color: #0d0d0d;
          color: white;
          text-align: center;
        }

        .hero-section {
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          background: #0d0d0d;
        }

        h1 {
          font-size: 2rem;
          font-weight: 400;
          color: #bfbfbf;
          margin-bottom: 10px;
        }

        .name {
          font-size: 3.5rem;
          font-weight: 700;
          background: linear-gradient(90deg, #ff0080, #ff00ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        h2 {
          font-size: 1.5rem;
          color: #a0a0a0;
          margin-top: 10px;
        }

        .social-icons {
          display: flex;
          justify-content: center;
          gap: 15px;
          margin-top: 20px;
          font-size: 30px;
        }

        .social-icons a {
          color: white;
          transition: 0.3s;
        }

        .social-icons a:hover {
          color: #ff00ff;
          transform: scale(1.2);
        }

        .hire-me {
          margin-top: 20px;
          padding: 10px 25px;
          font-size: 1.2rem;
          font-weight: 600;
          background: linear-gradient(90deg, #ff0080, #ff00ff);
          color: white;
          border: none;
          border-radius: 25px;
          cursor: pointer;
          transition: 0.3s;
        }

        .hire-me:hover {
          transform: scale(1.1);
          box-shadow: 0 0 10px rgba(255, 0, 255, 0.5);
        }

        .section-container {
          max-width: 800px;
          margin: 40px auto;
          padding: 30px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          box-shadow: 0px 0px 10px rgba(255, 0, 255, 0.3);
        }

        .profile-image {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          border: 5px solid #ff00ff;
          box-shadow: 0 0 15px #ff00ff;
          margin: 20px 0;
        }

        ul {
          list-style-type: none;
          padding: 0;
        }

        ul li {
          margin: 10px 0;
          font-size: 18px;
        }

        a {
          color: #ff0080;
          text-decoration: none;
        }

        a:hover {
          text-decoration: underline;
        }

        .contact-container {
          padding: 50px 20px;
        }

        .contact-title {
          font-size: 2rem;
          margin-bottom: 20px;
        }

        .contact-wrapper {
          display: flex;
          flex-direction: column;
          gap: 30px;
          text-align: left;
        }

        @media(min-width: 768px) {
          .contact-wrapper {
            flex-direction: row;
            justify-content: space-between;
          }
        }

        .contact-left,
        .contact-right {
          flex: 1;
        }

        .contact-info {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 15px;
        }

        .contact-info .icon {
          font-size: 20px;
          color: #ff00ff;
        }

        .contact-right input,
        .contact-right textarea {
          width: 100%;
          padding: 10px;
          margin: 10px 0;
          border: none;
          border-radius: 5px;
        }

        .contact-button {
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          background: #ff00ff;
          color: white;
          font-weight: bold;
          cursor: pointer;
        }

        .contact-button:hover {
          background: #e600e6;
        }
      `}</style>

      {/* Hero Section */}
      <div className="hero-section">
        <h1>Hello, my name is</h1>
        <div className="name">Tejas Gadhave</div>
        <h2>And I'm a Software Developer</h2>

        {/* Social Icons */}
        <div className="social-icons">
          <a href="https://github.com/tejasgadhave" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com/in/tejasgadhave" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="mailto:tejasgadhave@example.com"><FaEnvelope /></a>
        </div>

        {/* Hire Me Button */}
        <button className="hire-me" onClick={() => navigate("/contact")}>
          Hire Me
        </button>
      </div>

      {/* About Me Section */}
      <div className="contact-container" >
        <h1 className="contact-title">About Me</h1>
        <img src={id} alt="id" className="profile-image" />
        <h3>I'm Tejas Shivaji Gadhave</h3>
        <p>
          A dedicated <strong>Software Developer</strong> and <strong>BCA graduate</strong> with a passion for leveraging technology to solve complex problems efficiently.
        </p>
      </div>

      {/* Skills Section */}
      <div className="contact-container">
      <h1 className="contact-title">My Skills</h1>
        <ul>
          <li><strong>Programming Languages:</strong> Java, C#, JavaScript, C</li>
          <li><strong>Web Technologies:</strong> HTML, CSS, Bootstrap, React, Angular</li>
          <li><strong>Frameworks:</strong> Spring Boot, Hibernate</li>
          <li><strong>Databases:</strong> MySQL, MongoDB</li>
          <li><strong>Tools:</strong> Eclipse, VS Code, Postman</li>
        </ul>
      </div>

      {/* Education Section */}
      <div className="contact-container">
      <h1 className="contact-title">Education</h1>
        <ul>
          <li><strong>BCA</strong> - K.V.M College, Wai (2021-2024) - 62.56%</li>
          <li><strong>HSC</strong> - Dhananjarao Gadgil College, Satara (2020-2021) - 74.33%</li>
          <li><strong>SSC</strong> - New English School, Humgaon (2018-2019) - 78.40%</li>
        </ul>
      </div>

      {/* Projects Section */}
      <div className="contact-container">
        <h1 className="contact-title">My Projects</h1>
        <ul>
          <li><strong>Fitness Management System</strong> - Developed using C#, ASP.NET, and MySQL.</li>
          <li><strong>E-Book Management System</strong> - Created using Java Servlet, JSP, and MySQL.</li>
        </ul>
      </div>

      {/* Certifications Section */}
      <div className="contact-container">
        <h1 className="contact-title">My Certifications</h1>
        <ul>
          <li><strong>Mastering JavaScript Fundamentals</strong> - June 2024</li>
          <li><strong>Complete Git and GitHub Course</strong> - December 2024</li>
        </ul>
      </div>

      {/* Contact Section */}
      <div className="contact-container">
        <h1 className="contact-title">Contact Me</h1>

        <div className="contact-wrapper">
          {/* Left Section */}
          <div className="contact-left">
            <h3>Get in Touch</h3>
            <p>Feel free to reach out to me for any questions or opportunities!</p>

            <div className="contact-info">
              <FaUser className="icon" />
              <div><p>Tejas Gadhave</p></div>
            </div>

            <div className="contact-info">
              <FaMapMarkerAlt className="icon" />
              <div><p>Pune, Maharashtra</p></div>
            </div>

            <div className="contact-info">
              <FaEnvelope className="icon" />
              <div><p><a href="mailto:tejasgadhave980@gmail.com">tejasgadhave980@gmail.com</a></p></div>
            </div>

            <div className="contact-info">
              <FaPhone className="icon" />
              <div><p><a href="tel:+919175795041">+91 9175795041</a></p></div>
            </div>
          </div>

          {/* Right Section */}
          <div className="contact-right">
            <h3>Send Me a Message</h3>
            <form>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <input type="text" placeholder="Subject" required />
              <textarea placeholder="Your Message" required></textarea>
              <button type="submit" className="contact-button">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
