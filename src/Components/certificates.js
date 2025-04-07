import React from "react";
import { FaCertificate, FaCalendarAlt, FaExternalLinkAlt } from "react-icons/fa";

const Certificates = () => {
  return (
    <div className="certificates-container">
      <h1 className="certificates-title">Certifications</h1>
      <div className="underline"></div>

      {/* Certificate Cards */}
      <div className="certificates-cards">
        <div className="certificate-card">
          <FaCertificate className="certificate-icon" />
          <h2>Java (Basic)</h2>
          <p className="issuer">HackerRank</p>
          <p className="date"><FaCalendarAlt /> December 2024</p>
          <a
            href="https://www.hackerrank.com/certificates/your-java-certificate-link"
            target="_blank"
            rel="noopener noreferrer"
            className="certificate-link"
          >
            <FaExternalLinkAlt /> View Certificate
          </a>
        </div>

        <div className="certificate-card">
          <FaCertificate className="certificate-icon" />
          <h2>SQL Advanced</h2>
          <p className="issuer">HackerRank</p>
          <p className="date"><FaCalendarAlt /> December 2024</p>
          <a
            href="https://www.hackerrank.com/certificates/your-sql-certificate-link"
            target="_blank"
            rel="noopener noreferrer"
            className="certificate-link"
          >
            <FaExternalLinkAlt /> View Certificate
          </a>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
