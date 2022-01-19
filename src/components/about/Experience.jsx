import React from "react";

const experienceContent = [
  {
    year: "   Feb 2021 - Present",
    position: "Independent Web Developer (freelancer)",
    compnayName: "White Tower Designs",
    details: `Freelance frontend developer and web designer. Some of my projects include personal portfolios, e-commerce platforms and landing pages. Using a variety of tools like React, WordPress and Shopify.`,
  },
  {
    year: "Nov 2021 - Present",
    position: "Coding TA",
    compnayName: "University of Connecticut",
    details: `Instructional staff member in the blended online coding bootcamp offered by the University of Connecticut and Trilogy Education. Responsibilities include supporting the main instructor, grading student's coding projects and offering scheduled office hours for coding review and troubleshooting.`,
  },
  {
    year: "Sep 2020 - Feb 2021",
    position: "React Developer",
    compnayName: "Code for Philly",
    details: `React developer at Code for Philly, working on their project for Prevention Point, a needle exchange program in North Philly. Part of my responsibilities included designing and implementing new components, improving already existing components, error handling and testing.`,
  },
  {
    year: "Aug 2010 - Present",
    position: "Coding and World Languages Instructor",
    compnayName: "various school districts",
    details: `Teaching World Languages (Spanish and Greek), Coding and Computer Science skills to students of all ages (K-12). I have worked at various school districts in DE, MD and PA.`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
