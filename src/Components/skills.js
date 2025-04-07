import React from "react";


const Skills = () => {
  return (
    <div className="skills-container">
      {/* Title Section */}
      <h1 className="skills-title">Skills</h1>
      <div className="underline"></div>

      {/* Skills Cards */}
      <div className="skills-cards">
        <div className="skill-card">
          <h2>Java</h2>
          <p>Core Java, Object-Oriented Programming, Collections Framework</p>
        </div>

        <div className="skill-card">
          <h2>Advanced Java</h2>
          <p>JDBC, Servlets, JSP, Hibernate, JPA</p>
        </div>

        <div className="skill-card">
          <h2>Spring Framework</h2>
          <p>Spring Core, Spring MVC, Spring Boot, REST APIs</p>
        </div>

        <div className="skill-card">
          <h2>Web Technologies</h2>
          <p>HTML, CSS, Bootstrap, React, Angular</p>
        </div>

        <div className="skill-card">
          <h2>Databases</h2>
          <p>MySQL, MongoDB</p>
        </div>

        <div className="skill-card">
          <h2>Tools</h2>
          <p>Eclipse, VS Code, Postman</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
