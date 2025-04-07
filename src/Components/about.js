import React from 'react';
import id from "./assests/id.jpg";

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Me</h1>
      <div className="underline"></div>

      <div className="about-content">
        {/* Profile Image */}
        <div className="about-image">
         <img src={id} alt="id" className="profile-image" />
        </div>

        {/* About Text */}
        <div className="about-text">
          <h2>I'm Tejas Shivaji Gadhave</h2>
          <p>
            A passionate <strong>BCA graduate</strong> and software developer with expertise in Java, C# and web development.
          </p>
          <p>
            My journey in programming has been driven by the passion to build efficient and scalable applications. I specialize in backend development using <strong>Spring Boot and Core java</strong> and have experience with <strong>MySQL and MongoDB</strong>.
          </p>
          <p>
            I am actively seeking new opportunities to apply my skills and collaborate on exciting projects!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
