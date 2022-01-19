import React from "react";

const educationContent = [
  {
    year: "Aug 2021",
    degree: "Certification in UI/UX Design",
    institute: "Google",
    details: `Online certificate from Google (through Coursera) on UI/UX Design. Covering all product development phases (planning - implementation - evaluation).`,
  },
  {
    year: "Aug 2020",
    degree: "Certification in Full Stack Web Development",
    institute: "University of Pennsylvania",
    details: `An intensive 24-week program dedicated to preparing future full stack web developers. Skills learned consist of front and back end technologies as well as opportunities to collaborate in group projects with other future developers. Offered by the University of Pennsylvania and Trilogy Ed.`,
  },
  {
    year: "Sep 2017",
    degree: "Masters in Counseling",
    institute: "University of Seville, Spain",
    details: `Masters degree in Counseling with a focus on family mediation and conflict resolution with minors. Offered by the School of Psychology, University of Seville, Spain.`,
  },
  {
    year: "Sep 2004",
    degree: "Bachelors in Education",
    institute: "Aristotle University of Thessaloniki, Greece",
    details: `Bachelors in Early Childhood Education with a minor in Fine Arts. Offered by the Aristotle University of Thessaloniki, Greece.`,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-university"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
