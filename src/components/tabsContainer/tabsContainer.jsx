import "./../../styles/tabsContainer.css";
import  "../../styles/tab.css"

import { useState } from "react";
 
import { SideMenuButton } from "../sideButton/sideButton";

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

  const [allForms,setAllForms] =  useState([
                     [< GeneralForm key={0} />], 
                     [< EducationForm  key={0} />], 
                     [< ExperienceForm  key={0} />],
                     [< LanguageForm  key={0} />], 
                     [< ProjectForm  key={0}  />], 
                     [< PublicationForm  key={0}  />], 
                     [< SkillForm  key={0} />], 
                     [ < LinkForm key={0}  />], 
                     [< EmptyForm  key={0} />]
  ])

  const sideMenuButtons = sectionInfos.map((info, index) => { 
    return <SideMenuButton key={index} newClassName={clickedTopicId === index ? "clicked-btn": ""} info={info} handleClick={handleClick} clickedBtnIndex={index}/>
  })

  function handleClick(z){ 
    setClickedTopicId(z.clickedBtnIndex)
  }

  function handleAddComponent(){
    let newForm = null;
    if (clickedTopicId === 1) {
      newForm = < EducationForm key={allForms[clickedTopicId].length}/>
    } else if (clickedTopicId === 2) {
           newForm = < ExperienceForm key={allForms[clickedTopicId].length}/>
    }else if (clickedTopicId === 3) {
           newForm = < LanguageForm key={allForms[clickedTopicId].length}/>
    }else if (clickedTopicId === 4) {
           newForm = < ProjectForm key={allForms[clickedTopicId].length}/>
    }else if (clickedTopicId === 5) {
           newForm = < PublicationForm key={allForms[clickedTopicId].length}/>
    }else if (clickedTopicId === 6) {
           newForm = < SkillForm key={allForms[clickedTopicId].length}/>
    }else if (clickedTopicId === 7) {
           newForm = < LinkForm key={allForms[clickedTopicId].length}/>
    } else  {
      return
    }
    setAllForms(  [...allForms, allForms[clickedTopicId][allForms[clickedTopicId].length] = newForm]
     )
  }

  console.log("all forms: ", allForms)
  return (
    <span className="tabs-container">
      <h1>CV-Creator</h1>
      <main className="tabs-interior">
        <div id="side-menu">
          {sideMenuButtons}
        </div>
        <div className="info-list">
           <button type="text" onClick={handleAddComponent}>Add further eductation</button>
            <div>
            {allForms[clickedTopicId]}
            </div>
        </div>
      </main>
    </span>
  );
}
