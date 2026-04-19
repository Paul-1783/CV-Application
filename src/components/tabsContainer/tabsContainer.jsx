import "./../../styles/tabsContainer.css";

import { useState } from "react";

import { SideMenuButton } from "../sideButton/sideButton";
import  allForms from "../forms/index.js";

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
  const [buttonNr, setButtonNr]  = useState(8)


  function handleClick(z){
    setButtonNr(z.clickedBtnIndex)
    console.log(z.clickedBtnIndex, " Button nr ", buttonNr)
  }
  
  const sideMenuButtons = sectionInfos.map((info, index) => { 
   return <SideMenuButton key={index} info={info} handleClick={handleClick} clickedBtnIndex={index}/>
  })

  return (
    <span className="tabs-container">
      <h1>CV-Creator</h1>
      <main className="tabs-interior">
        <div id="side-menu">
          {sideMenuButtons}
        </div>
        <div className="info-list">{allForms[buttonNr]}</div>
      </main>
    </span>
  );
}
