import "./App.css";
import { useState } from "react";
import { PreviewFrame } from "./components/preview/preview.jsx";
import { TabsContainer } from "./components/tabsContainer/tabsContainer.jsx";
 
function App() {
  let startArray = [
    [{id: 1, formTopic: "general", name:"", phone:"", email:""}],
    [{id: 2, formTopic: "education", school: "", degree: "", start: "", end: "", location: ""}],
    [{id: 3, formTopic: "experience", companyName: "",  jobTitle: "", address: "", descriptionTitle: ""}],
    [{id: 4, formTopic: "languages", languageName: "", languageLevel: ""}],
    [{id: 5, formTopic: "project", title: "", projectDescription: ""}],
    [{id: 6, formTopic: "publication", publicationTitle: "", journalName: "", publicationDate: ""}],
    [{id: 7, formTopic: "skills", theoreticalKnowledge: "", programmingLanguages: "", framworkName: ""}],
    [{id: 8, formTopic: "links", fullName: "", linkedinProfile: "", xingProfile: ""}]
  ]

  const [allForms, setAllForms] = useState(startArray)

  const [numberOfForms, setNumberOfForms] = useState(8)
  
  function clearAll(){
    setAllForms(() => startArray)
  }


  return (
    <>
      <TabsContainer allForms={allForms} setAllForms={setAllForms} numberOfForms={numberOfForms} setNumberOfForms={setNumberOfForms} clearAll={clearAll} />
      <PreviewFrame allForms={allForms}/>
    </>
  );
}

export default App;