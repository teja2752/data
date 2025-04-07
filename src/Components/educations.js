import React from "react";


const Education = () => {
  return (
    <div className="education-container">
      {/* Title Section */}
      <h1 className="education-title">Education</h1>
      <div className="underline"></div>

      {/* Education Cards */}
      <div className="education-cards">
        <div className="education-card">
          <h2>Bachelor of Computer Applications (BCA)</h2>
          <p>K.V.M College, Wai</p>
          <p>2021 - 2024</p>
          <p className="highlight">Percentage: 62.56%</p>
        </div>

        <div className="education-card">
          <h2>Higher Secondary (HSC)</h2>
          <p>Dhananjarao Gadgil College, Satara</p>
          <p>2020 - 2021</p>
          <p className="highlight">Percentage: 74.33%</p>
        </div>

        <div className="education-card">
          <h2>Secondary School (SSC)</h2>
          <p>New English School, Humgaon</p>
          <p>2018 - 2019</p>
          <p className="highlight">Percentage: 78.40%</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
