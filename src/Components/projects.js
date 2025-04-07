import React from "react";

const Projects = () => {
  return (
    <div className="projects-container">
      {/* Title Section */}
      <h1 className="projects-title">Projects</h1>
      <div className="underline"></div>

      {/* Projects Cards */}
      <div className="projects-cards">
        <div className="project-card">
          <h2>Fitness Management System</h2>
          <p className="tech-stack">C#, ASP.NET, MySQL</p>
          <ul>
            <li>Manages schedules, memberships, and financial records</li>
            <li>Provides role-based access control for trainers & members</li>
            <li>Automated billing and attendance tracking</li>
          </ul>
          <a
            href="https://github.com/yourusername/fitness-management-system"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            🔗 View Code
          </a>
        </div>

        <div className="project-card">
          <h2>E-Book Management System</h2>
          <p className="tech-stack">Java, Servlets, JSP, MySQL</p>
          <ul>
            <li>Allows users to add, search, and download e-books</li>
            <li>Advanced search with filters for genre & author</li>
            <li>Secure user authentication and cloud storage support</li>
          </ul>
          <span className="project-link muted">🔗 Code Coming Soon</span>
        </div>
      </div>
    </div>
  );
};

export default Projects;
