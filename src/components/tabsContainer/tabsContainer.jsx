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

export function TabsContainer() {

  const [clickedTopicId, setClickedTopicId] = useState(8)
  const [allForms, setAllForms] = useState([[],[],[],[],[],[],[],[]])
  const [numberOfForms, setNumberOfForms] = useState(0)
  const loadedRef = useRef(false);

  useEffect(() => {
    if (loadedRef.current) return;
    loadedRef.current = true;

    console.log("START ", numberOfForms)

    // setAllForms(allForms => [...allForms, allForms[0].push({id: 1, formTopic: "general", name:"", phone:"", email:""})]);
    // setAllForms(allForms => [...allForms, allForms[1].push({id: 2, formTopic: "education", school: "", degree: "", start: "", end: "", location: ""})]);
    // setAllForms(allForms => [...allForms, allForms[2].push({id: 3, formTopic: "experience", companyName: "",  jobTitle: "", address: "", descriptionTitle: ""})]);
    // setAllForms(allForms => [...allForms, allForms[3].push({id: 4, formTopic: "languages", languageName: "", languageLevel: ""})]);    
    // setAllForms(allForms => [...allForms, allForms[4].push({id: 5, formTopic: "project", title: "", projectDescription: ""})]);
    // setAllForms(allForms => [...allForms, allForms[5].push({id: 6, formTopic: "publication", publicationTitle:"", journalName:"", publicationDate:""})]);    
    // setAllForms(allForms => [...allForms, allForms[6].push({id: 7, formTopic: "skills", theoreticalKnowledge:"", programmingLanguages:"", framworkName: ""})]);
    // setAllForms(allForms => [...allForms, allForms[7].push({id: 8, formTopic: "links", fullName:"", linkedinProfile:"", xingProfile:""})]);  

    // setAllForms(allForms => [...allForms, 
    //  allForms[0].push({id: 1, formTopic: "general", name:"", phone:"", email:""}),
    //  allForms[1].push({id: 2, formTopic: "education", school: "", degree: "", start: "", end: "", location: ""}),
    //  allForms[2].push({id: 3, formTopic: "experience", companyName: "",  jobTitle: "", address: "", descriptionTitle: ""}),
    //  allForms[3].push({id: 4, formTopic: "languages", languageName: "", languageLevel: ""}), 
    //  allForms[4].push({id: 5, formTopic: "project", title: "", projectDescription: ""}),
    //  allForms[5].push({id: 6, formTopic: "publication", publicationTitle:"", journalName:"", publicationDate:""}),   
    //  allForms[6].push({id: 7, formTopic: "skills", theoreticalKnowledge:"", programmingLanguages:"", framworkName: ""}),
    //  allForms[7].push({id: 8, formTopic: "links", fullName:"", linkedinProfile:"", xingProfile:""})
    // ]);

    setAllForms(allForms => {
     allForms[0][0] = {id: 1, formTopic: "general", name:"", phone:"", email:""},
     allForms[1][0] = {id: 2, formTopic: "education", school: "", degree: "", start: "", end: "", location: ""},
     allForms[2][0] = {id: 3, formTopic: "experience", companyName: "",  jobTitle: "", address: "", descriptionTitle: ""},
     allForms[3][0] = {id: 4, formTopic: "languages", languageName: "", languageLevel: ""}, 
     allForms[4][0] = {id: 5, formTopic: "project", title: "", projectDescription: ""},
     allForms[5][0] = {id: 6, formTopic: "publication", publicationTitle: "", journalName: "", publicationDate: ""},   
     allForms[6][0] = {id: 7, formTopic: "skills", theoreticalKnowledge: "", programmingLanguages: "", framworkName: ""},
     allForms[7][0] = {id: 8, formTopic: "links", fullName: "", linkedinProfile: "", xingProfile: ""}
     return allForms
    })

    setNumberOfForms(number => number + 8)
  }, [])

  const sideMenuButtons = sectionInfos.map((info, index) => { 
    return <SideMenuButton key={index} newClassName={clickedTopicId === index ? "clicked-btn": ""} info={info} handleClick={handleClick} clickedBtnIndex={index}/>
  })

  function handleAddedInfo(currentFormContent){
    
    console.log(currentFormContent, " allForms in handleAddedInfo ", allForms)

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

    setNumberOfForms(numberOfForms =>  numberOfForms + 1)

    clickedTopicId === 0 ? 
              allForms:
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
                setAllForms(allForms => {
                  allForms[7][allForms[7].length]= { id: numberOfForms, formTopic: "links", fullName:"", linkedinProfile:"", xingProfile:"" }
                  if(allForms[7].filter(form => form.id === numberOfForms).length === 2)
                      allForms[7].pop()
                  return allForms
                });
  
  } 

  console.log("forms ", allForms)
  console.log("numbers of forms outside ", numberOfForms)

  return (
    <span className="tabs-container">
      <h1>CV-Creator</h1>
            <button className="add-btn sideMenuButton" onClick={addForm} >Add Entryform</button>

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
            ) : < EmptyForm />
          }
        </div>
      </main>
    </span>
  );
}
