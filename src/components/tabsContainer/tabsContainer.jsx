import "./../../styles/tabsContainer.css";

import { SideMenuButton } from "../sideButton/sideButton";

import educationIcon from "./../../assets/education.png";
import experienceIcon from "./../../assets/experience.png";
import languageIcon from "./../../assets/language.png";
import projectIcon from "./../../assets/project.png";
import publicationIcon from "./../../assets/publication.png";
import skillIcon from "./../../assets/skill.png";
import linkIcon from "./../../assets/links.png";
import generalIcon from "./../../assets/general.png";

const sectionInfos = [
  {sectionName : "general info", icon: generalIcon},
  {sectionName : "education", icon: educationIcon},
  {sectionName : "experience", icon: experienceIcon},
  {sectionName : "language", icon: languageIcon},
  {sectionName : "project", icon: projectIcon},
  {sectionName : "publication", icon:  publicationIcon},
  {sectionName : "skills", icon: skillIcon},
  {sectionName : "links", icon: linkIcon},
];

export function TabsContainer() {
  
  const sideMenuButtons = sectionInfos.map((info, index) => { 
   return <SideMenuButton key={index} info={info}/>
  })

  return (
    <span className="tabs-container">
      <h1>CV-Creator</h1>
      <main className="tabs-interior">
        <div id="side-menu">
          {sideMenuButtons}
          {/* <button className="sideMenuButton">
            <img src={generalIcon} alt="general" />
          </button>
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
          </button> */}
        </div>
        <div className="info-list"></div>
      </main>
    </span>
  );
}
