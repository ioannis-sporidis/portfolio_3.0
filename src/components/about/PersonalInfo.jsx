import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Giannis" },
  { meta: "last name", metaInfo: "Sporidis-Foster" },
  { meta: "Location", metaInfo: "Pennsylvania" },
  { meta: "City", metaInfo: "Philadelphia" },
  { meta: "Hire", metaInfo: "Available" },
  { meta: "Stack", metaInfo: "Front-end (React.js)" },
  { meta: "Email", metaInfo: "ioannis.sporidis@gmail.com" },
  { meta: "langages", metaInfo: "English, Greek, Spanish" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
