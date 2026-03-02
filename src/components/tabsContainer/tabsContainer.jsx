import "./../../styles/tabsContainer.css";

import educationIcon from "./../../assets/education.png";
import experienceIcon from "./../../assets/experience.png";
import languageIcon from "./../../assets/language.png";
import projectIcon from "./../../assets/project.png";
import publicationIcon from "./../../assets/publication.png";
import skillIcon from "./../../assets/skill.png";
import linkIcon from "./../../assets/links.png";
import generalIcon from "./../../assets/general.png";

import { useState } from "react";

export function TabsContainer() {
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);

  let buttons = document.querySelectorAll(".sideMenuButton");
  let sections = document.querySelectorAll(".cv-details-input");

  sections.forEach((section, index) => {
    if (index !== activeSectionIndex) {
      section.classList.add("hidden");
      buttons[index].classList.remove("noRightBorder");
      buttons[index].style.borderRadius = "5px";
      buttons[index].style.boxShadow = "inset 0 0 14px 4px rgba(0, 0, 0, 0.2)";
    } else {
      section.classList.remove("hidden");
      buttons[index].classList.add("noRightBorder");
      buttons[index].style.borderRadius = "0px";
      buttons[index].style.boxShadow = "unset";
    }
  });

  return (
    <span className="tabs-container">
      <h1>CV-Creator</h1>
      <main className="tabs-interior">
        <div id="side-menu">
          <button
            className="sideMenuButton startButton"
            section-name={"general info"}
            onClick={() => {
              {
                setActiveSectionIndex(0);
                buttons[0].classList.remove("startButton");
              }
            }}
          >
            <img src={generalIcon} alt="general" />
          </button>
          <button
            className="sideMenuButton"
            section-name={"education"}
            onClick={() => {
              setActiveSectionIndex(1);
              buttons[0].classList.remove("startButton");
            }}
          >
            <img src={educationIcon} alt="education" />
          </button>
          <button
            className="sideMenuButton"
            section-name={"experience"}
            onClick={() => {
              setActiveSectionIndex(2);
              buttons[0].classList.remove("startButton");
            }}
          >
            {" "}
            <img src={experienceIcon} alt="experience" />
          </button>
          <button
            className="sideMenuButton"
            section-name={"language"}
            onClick={() => {
              setActiveSectionIndex(3);
              buttons[0].classList.remove("startButton");
            }}
          >
            {" "}
            <img src={languageIcon} alt="language" />
          </button>
          <button
            className="sideMenuButton"
            section-name={"project"}
            onClick={() => {
              setActiveSectionIndex(4);
              buttons[0].classList.remove("startButton");
            }}
          >
            {" "}
            <img src={projectIcon} alt="project" />
          </button>
          <button
            className="sideMenuButton"
            section-name={"publication"}
            onClick={() => {
              setActiveSectionIndex(5);
              buttons[0].classList.remove("startButton");
            }}
          >
            {" "}
            <img src={publicationIcon} alt="publication" />
          </button>
          <button
            className="sideMenuButton"
            section-name={"skills"}
            onClick={() => {
              setActiveSectionIndex(6);
              buttons[0].classList.remove("startButton");
            }}
          >
            {" "}
            <img src={skillIcon} alt="skill" />
          </button>
          <button
            className="sideMenuButton"
            section-name={"links"}
            onClick={() => {
              setActiveSectionIndex(7);
              buttons[0].classList.remove("startButton");
            }}
          >
            {" "}
            <img src={linkIcon} alt="links" />
          </button>
        </div>
        <div className="info-list">
          <section className="cv-details-input general">
            <h2>General</h2>
            <form action="" className="cv-details-form">
              <div className="name-container">
                <label htmlFor="fullName" id="full-name">
                  Full Name
                </label>
                <input type="text" id="fullName" />
              </div>
              <div className="jobTitle-container">
                <label htmlFor="jobTitle" id="job-title">
                  job Title
                </label>
                <input type="text" id="jobTitle" />
              </div>
              <div className="email-container">
                <label htmlFor="email" id="email">
                  Email
                </label>
                <input type="text" id="email" />
              </div>
              <div className="phone-container">
                <label htmlFor="phone" id="phone">
                  Phone
                </label>
                <input type="text" id="phone" />
              </div>
              <div className="address-container">
                <label htmlFor="" id="address">
                  Address
                </label>
                <input type="text" name="address" id="address" />
              </div>
              <div className="summary-container">
                <label htmlFor="summary" id="summary">
                  Summary
                </label>
                <textarea type="text" id="summary" />
              </div>
            </form>
          </section>
          <section className="cv-details-input education">
            {" "}
            <h2>Education</h2>
            <form action="" className="cv-details-form">
              <div className="school">
                <label htmlFor="school-name" className="school-name">
                  School
                </label>
                <input type="text" id="school-name" />
              </div>
              <div className="degree">
                <label htmlFor="degree-name" className="degree-name">
                  Degree
                </label>
                <input type="text" id="degree-name" />
              </div>
              <div className="start">
                <label htmlFor="start-date" className="start-date">
                  Start
                </label>
                <input type="text" id="start-date" />
              </div>
              <div className="end">
                <label htmlFor="end-date" className="end-date">
                  End
                </label>
                <input type="text" id="end-date" />
              </div>
              <div className="location">
                <label htmlFor="location-name" className="location-name">
                  Location of the school
                </label>
                <input type="text" id="location-name" />
              </div>
            </form>
          </section>
          <section className="cv-details-input experience">
            {" "}
            <h2>Experience</h2>
            <form action="" className="cv-details-form">
              <div className="company">
                <label htmlFor="company-name" className="company-name">
                  Company Name
                </label>
                <input type="text" id="company-name" />
              </div>
              <div className="job">
                <label htmlFor="job-title" className="job-title">
                  Job Title
                </label>
                <input type="text" id="job-title" />
              </div>
              <div className="address">
                <label htmlFor="address-name" className="address-name">
                  Address
                </label>
                <input type="text" id="address-name" />
              </div>
              <div className="description">
                <label
                  htmlFor="description-title"
                  className="description-title"
                >
                  Description
                </label>
                <textarea
                  name="description-title"
                  id="description-title"
                ></textarea>
              </div>
            </form>
          </section>
          <section className="cv-details-input language">
            {" "}
            <h2>Language(s)</h2>
            <form action="" className="cv-details-form">
              <div className="name">
                <label htmlFor="language-name" className="language-name">
                  Name
                </label>
                <input type="text" id="language-name" />
              </div>
              <div className="level">
                <label htmlFor="language-level" className="language-level">
                  Level
                </label>
                <input type="text" id="language-level" />
              </div>
            </form>
          </section>
          <section className="cv-details-input project">
            <h2>Project</h2>{" "}
            <form action="" className="cv-details-form">
              <div className="title">
                <label htmlFor="project-title" className="project-title">
                  Project Name
                </label>
                <input type="text" id="project-title" />
              </div>
              <div className="description">
                <label
                  htmlFor="project-description"
                  className="project-description"
                >
                  Description
                </label>
                <textarea type="text" id="project-description" />
              </div>
            </form>
          </section>
          <section className="cv-details-input publication">
            {" "}
            <h2>Publication</h2>
            <form action="" className="cv-details-form">
              <div className="title">
                <label
                  htmlFor="publication-title"
                  className="publication-title"
                >
                  Title
                </label>
                <input type="text" id="publication-title" />
              </div>
              <div className="journal">
                <label htmlFor="journal-name" className="journal-name">
                  Journal
                </label>
                <input type="text" id="journal-name" />
              </div>
              <div className="date">
                <label htmlFor="publication-date" className="publication-date">
                  Date
                </label>
                <input type="text" id="publication-date" />
              </div>
            </form>
          </section>
          <section className="cv-details-input skills">
            {" "}
            <h2>Technical Skills</h2>
            <form action="" className="cv-details-form">
              <div className="theory">
                <label
                  htmlFor="theoretical-knowledge"
                  className="theoretical-knowledge"
                >
                  Concepts
                </label>
                <input type="text" id="theoretical-knowledge" />
              </div>
              <div className="programming">
                <label
                  htmlFor="programming-languages"
                  className="programming-languages"
                >
                  programming languages
                </label>
                <input type="text" id="programming-languages" />
              </div>
              <div className="framework">
                <label htmlFor="framework-name" className="framework-name">
                  Framework/Library
                </label>
                <input type="text" id="framwork-name" />
              </div>
            </form>
          </section>
          <section className="cv-details-input links">
            {" "}
            <h2>Social</h2>
            <form action="" className="cv-details-form">
              <div className="linkedin">
                <label htmlFor="linkedin-profile" className="linkedin-profile">
                  Linkedin
                </label>
                <input type="text" id="linkedin-profile" />
              </div>
              <div className="xing">
                <label htmlFor="xing-profile" className="xing-profile">
                  Xing
                </label>
                <input type="text" id="xing-profile" />
              </div>
              <div className="git">
                <label htmlFor="git-profile" className="git-profile">
                  Git
                </label>
                <input type="text" id="git-profile" />
              </div>
            </form>
          </section>
        </div>
      </main>
    </span>
  );
}
