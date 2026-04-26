import "./../../styles/tabsContainer.css";
import  "../../styles/tab.css"

import { useState } from "react";

 
import { SideMenuButton } from "../sideButton/sideButton";
// import  allForms from "../forms/index.js"

import { GeneralForm } from "./../forms/generalForm.jsx";
import  {ExperienceForm } from "./../forms/experiencesForm.jsx";
import {EducationForm} from "./../forms/educationForm.jsx";
import { LanguageForm } from "./../forms/languagesForm.jsx";
import { LinkForm} from "./../forms/linksForm.jsx";
import { ProjectForm } from "./../forms/projectForm.jsx";
import { PublicationForm} from "./../forms/publicationFrom.jsx";
import { SkillForm} from "./../forms/skillsForm.jsx";
import { EmptyForm } from "./../forms/emptyForm.jsx";

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

  const [clickedTopicId, setClickedTopicId] = useState(8)
  // const [allInformation, setAllInformation] = useState([]) 

  const allForms = [GeneralForm(), EducationForm(), ExperienceForm(), LanguageForm(), ProjectForm(), PublicationForm(), SkillForm(),  LinkForm(), EmptyForm()]
  
  const sideMenuButtons = sectionInfos.map((info, index) => { 
    return <SideMenuButton key={index} newClassName={clickedTopicId === index ? "clicked-btn": ""} info={info} handleClick={handleClick} clickedBtnIndex={index}/>
  })

  function handleClick(z){ 
    setClickedTopicId(z.clickedBtnIndex)
    // console.log(z.clickedBtnIndex, " Button nr ", clickedTopicId)
  }
 
  return (
    <span className="tabs-container">
      <h1>CV-Creator</h1>
      <main className="tabs-interior">
        <div id="side-menu">
          {sideMenuButtons}
        </div>
        <div className="info-list">{allForms[clickedTopicId]}</div>
      </main>
    </span>
  );
}
