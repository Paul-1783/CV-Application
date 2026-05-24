import "./../../styles/tabsContainer.css";
import  "../../styles/tab.css"

import { use, useState, useEffect, useRef } from "react";
 
import { SideMenuButton } from "../sideButton/sideButton";

import { GeneralForm } from "./../forms/generalForm.jsx";
import { ExperienceForm } from "./../forms/experiencesForm.jsx";
import { EducationForm } from "./../forms/educationForm.jsx";
import { LanguageForm } from "./../forms/languagesForm.jsx";
import { LinkForm } from "./../forms/linksForm.jsx";
import { ProjectForm } from "./../forms/projectForm.jsx";
import { PublicationForm } from "./../forms/publicationFrom.jsx";
import { SkillForm } from "./../forms/skillsForm.jsx";
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

export function TabsContainer({allForms, setAllForms, numberOfForms, setNumberOfForms}) {

  const [clickedTopicId, setClickedTopicId] = useState(8)

  const sideMenuButtons = sectionInfos.map((info, index) => { 
    return <SideMenuButton key={index} newClassName={clickedTopicId === index ? "clicked-btn": ""} info={info} handleClick={handleClick} clickedBtnIndex={index}/>
  })

  function handleAddedInfo(currentFormContent){
     setAllForms(prevForms => {
      return prevForms.map(oneTopic =>
        oneTopic.map(formContent => {
            if(formContent.id === currentFormContent.id){
              for(let property in currentFormContent)
                formContent[`${property}`] = currentFormContent[`${property}`]
            }
            return formContent
        })
      )
    })
  }

  function handleClick(z){ 
    setClickedTopicId(z.clickedBtnIndex)
  }
      
  function addForm() {
    if(clickedTopicId === 8) return

    setNumberOfForms(numberOfForms => numberOfForms + 1)

    clickedTopicId === 1 ? 
              setAllForms(allForms => {
                allForms[1][allForms[1].length] = { id: numberOfForms, formTopic: "education", school: "", degree: "", start: "", end: "", location: "" };
                if(allForms[1].filter(form => form.id === numberOfForms).length === 2)
                  allForms[1].pop()
                return allForms
              }):
    clickedTopicId === 2 ? 
              setAllForms(allForms => {
                allForms[2][allForms[2].length] = { id: numberOfForms, formTopic: "experience", companyName: "", jobTitle: "", address: "", descriptionTitle: ""}
                if(allForms[2].filter(form => form.id === numberOfForms).length === 2)
                  allForms[2].pop()
                return allForms
              }):
    clickedTopicId === 3 ? 
               setAllForms(allForms => {
                allForms[3][allForms[3].length] = { id: numberOfForms, formTopic: "languages", languageName: "", languageLevel: "" }
                if(allForms[3].filter(form => form.id === numberOfForms).length === 2)
                  allForms[3].pop()
                return allForms
               }):
    clickedTopicId === 4 ? 
              setAllForms(allForms => { 
                allForms[4][allForms[4].length] = { id: numberOfForms, formTopic: "project", title: "", projectDescription: "" }
                if(allForms[4].filter(form => form.id === numberOfForms).length === 2)
                  allForms[4].pop()
                return allForms
               }):
    clickedTopicId === 5 ? 
                setAllForms(allForms => {
                  allForms[5][allForms[5].length] = { id: numberOfForms, formTopic: "publication", publicationTitle: "", journalName: "", publicationDate: "" }
                  if(allForms[5].filter(form => form.id === numberOfForms).length === 2)
                    allForms[5].pop()
                  return allForms
                }): 
    clickedTopicId === 6 ? 
                setAllForms(allForms => {
                  allForms[6][allForms[6].length] = { id: numberOfForms, formTopic: "skills", theoreticalKnowledge: "", programmingLanguages: "", framworkName: "" }
                  if(allForms[6].filter(form => form.id === numberOfForms).length === 2)
                      allForms[6].pop()
                  return allForms
                }):
                allForms  
  } console.log(clickedTopicId)

  return (
    <span className="tabs-container">
      <h1>CV-Creator</h1>
      <button className="add-btn sideMenuButton" onClick={addForm} style={{visibility: clickedTopicId === 7 || clickedTopicId === 0 ? "hidden": "visible"}} >Add Entry</button>
      <main className="tabs-interior">
        <div id="side-menu">
          {sideMenuButtons}
        </div>
        <div className="info-list">
          { 
            clickedTopicId !== 8 ?
            allForms[clickedTopicId].map(oneComponent => 
              clickedTopicId === 0 ? < GeneralForm  key={oneComponent.id}  handleAddedInfo={handleAddedInfo}   oneComponent={oneComponent}  /> : 
              clickedTopicId === 1 ? < EducationForm   key={oneComponent.id}  handleAddedInfo={handleAddedInfo}   oneComponent={oneComponent}  /> : 
              clickedTopicId === 2 ? < ExperienceForm   key={oneComponent.id}  handleAddedInfo={handleAddedInfo}   oneComponent={oneComponent}  /> : 
              clickedTopicId === 3 ? < LanguageForm   key={oneComponent.id}  handleAddedInfo={handleAddedInfo}   oneComponent={oneComponent}  /> : 
              clickedTopicId === 4 ? < ProjectForm   key={oneComponent.id}  handleAddedInfo={handleAddedInfo}   oneComponent={oneComponent}  /> : 
              clickedTopicId === 5 ? < PublicationForm   key={oneComponent.id}  handleAddedInfo={handleAddedInfo}   oneComponent={oneComponent}  /> : 
              clickedTopicId === 6 ? < SkillForm   key={oneComponent.id}  handleAddedInfo={handleAddedInfo}   oneComponent={oneComponent}  /> : 
                                     < LinkForm   key={oneComponent.id}  handleAddedInfo={handleAddedInfo}   oneComponent={oneComponent}  />  
            ) : < GeneralForm  key={0}  handleAddedInfo={handleAddedInfo}   oneComponent={allForms[0][0]}  />// < EmptyForm />
          }
        </div>
      </main>
    </span>
  );
}
