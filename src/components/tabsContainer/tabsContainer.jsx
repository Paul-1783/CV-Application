import "./../../styles/tabsContainer.css";
import  "../../styles/tab.css"

import { useState, useEffect, useRef } from "react";
 
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
import { use } from "react";
 
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
  const [allForms, setAllForms] = useState([[],[],[],[],[],[],[],[]])
  const [numberOfForms, setNumberOfForms] = useState(1)
  const loadedRef = useRef(false);
  // const [currentGeneralInfo, setCurrentGeneralInfo] = useState({formTopic: "general", name:"", phone:"", email:""})
  // const [currentLanguageInfo, setLanguageInfo] = useState({formTopic: "languages", languageName:"", languageLevel:""})
  // const [currentExperienceInfo, setCurrentExperienceInfo] = useState({formTopic: "experience", companyName: "",  jobTitle: "", address: "", descriptionTitle: ""})
  // const [currentEducationInfo, setCurrentEducationInfo] = useState({formTopic: "education", school: "", degree: "", start: "", end: "", location: ""})
  // const [currentLinks, setCurrentLinks] = useState({formTopic: "links", fullName:"", linkedinProfile:"", xingProfile:""})
  // const [skillSet, setSkillSet] = useState({formTopic: "skills", theoreticalKnowledge:"", programmingLanguages:"", framworkName:""})
  // const [publications, setPublications] = useState({formTopic: "publication", publicationTitle:"", journalName:"", publicationDate:""})
  // const [projects, setProjects] = useState({formTopic: "project", title:"", projectDescription:""})

  // const allForms = [
                    //  < GeneralForm currentGeneralInfo={currentGeneralInfo} setCurrentGeneralInfo={setCurrentGeneralInfo} />, 
                    //  < EducationForm  currentEducationInfo={currentEducationInfo} setCurrentEducationInfo={setCurrentEducationInfo} />, 
                    //  < ExperienceForm currentExperienceInfo={currentExperienceInfo} setCurrentExperienceInfo={setCurrentExperienceInfo} />,
                    //  < LanguageForm currentLanguageInfo={currentLanguageInfo} setLanguageInfo={setLanguageInfo} />, 
                    //  < ProjectForm  projects={projects} setProjects={setProjects} />, 
                    //  < PublicationForm publications={publications} setPublications={setPublications} />, 
                    //  < SkillForm skillSet={skillSet} setSkillSet={setSkillSet} />, 
                    //  < LinkForm currentLinks={currentLinks} setCurrentLinks={setCurrentLinks} />, 
                    //  < EmptyForm />
  //                   ]

  useEffect(() => {
    if (loadedRef.current) return;
    loadedRef.current = true;

    console.log("START ", numberOfForms)

    setAllForms([...allForms, allForms[0].push({id: 1})]);
    setAllForms([...allForms, allForms[1].push({id: 2})]);
    setAllForms([...allForms, allForms[2].push({id: 3})]);
    setAllForms([...allForms, allForms[3].push({id: 4})]);    
    setAllForms([...allForms, allForms[4].push({id: 5})]);
    setAllForms([...allForms, allForms[5].push({id: 6})]);    
    setAllForms([...allForms, allForms[6].push({id: 7})]);
    setAllForms([...allForms, allForms[7].push({id: 8})]);  

    setNumberOfForms(number => number + 8)

  }, [])

  const sideMenuButtons = sectionInfos.map((info, index) => { 
    return <SideMenuButton key={index} newClassName={clickedTopicId === index ? "clicked-btn": ""} info={info} handleClick={handleClick} clickedBtnIndex={index}/>
  })

  function handleAddedInfo(formType){

  }

  function handleClick(z){ 
    setClickedTopicId(z.clickedBtnIndex)
  }
      
  console.log("END ", numberOfForms)
 
  console.log("forms ", allForms)

  return (
    <span className="tabs-container">
      <h1>CV-Creator</h1>
      <main className="tabs-interior">
        <div id="side-menu">
          {sideMenuButtons}
        </div>
        <div className="info-list">
          {
            clickedTopicId !== 8 ? 
            allForms[clickedTopicId].map(oneComponent => 
                { 
                  clickedTopicId === 0 ? < GeneralForm setAllForms={setAllForms} clickedTopicId={clickedTopicId} handleAddedInfo={handleAddedInfo} /> : 
                  clickedTopicId === 1 ? < EducationForm setAllForms={setAllForms} clickedTopicId={clickedTopicId} handleAddedInfo={handleAddedInfo} /> : 
                  < EmptyForm />;
                }
            ) : < EmptyForm />
          }
        </div>
      </main>
    </span>
  );
}
