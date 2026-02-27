import "./../../styles/tabsContainer.css";

import educationIcon from "./../../assets/education.png";
import experienceIcon from "./../../assets/experience.png";
import languageIcon from "./../../assets/language.png";
import projectIcon from "./../../assets/project.png";
import publicationIcon from "./../../assets/publication.png";
import skillIcon from "./../../assets/skill.png";
import linkIcon from "./../../assets/links.png";

export function TabsContainer() {
  return (
    <span className="tabs-container">
      <h1>CV-Creator</h1>
      <main className="tabs-interior">
        <div id="side-menu">
          <button className="sideMenuButton">
            <img src={educationIcon} alt="education" />
          </button>
          <button className="sideMenuButton">
            {" "}
            <img src={experienceIcon} alt="experience" />
          </button>
          <button className="sideMenuButton">
            {" "}
            <img src={languageIcon} alt="language" />
          </button>
          <button className="sideMenuButton">
            {" "}
            <img src={projectIcon} alt="project" />
          </button>
          <button className="sideMenuButton">
            {" "}
            <img src={publicationIcon} alt="publication" />
          </button>
          <button className="sideMenuButton">
            {" "}
            <img src={skillIcon} alt="skill" />
          </button>
          <button className="sideMenuButton">
            {" "}
            <img src={linkIcon} alt="links" />
          </button>
        </div>
        <div className="info-list"></div>
      </main>
    </span>
  );
}
