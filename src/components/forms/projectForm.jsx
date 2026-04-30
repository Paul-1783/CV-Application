
import { ThemeContext, ThemeUpdateContext } from '../themeContext.jsx'
import { useContext, useState} from 'react';
    

export function ProjectForm(){

      const [saved, setSaved] = useState(false)
      const [projects, setProjects] = useState({formTopic: "project", title:"", projectDescription:""})

      let handleAddedInfo = useContext(ThemeUpdateContext)
      let allInformation = useContext(ThemeContext)
  
      function handleClick(e) {
          if(!saved)
              handleAddedInfo(projects) 
          setSaved(previousState => !previousState)        
      }
  
    return(
        <form   action={handleClick} className="inputForm">
            <h2>Projects:</h2>
            <div className="title">
                <label htmlFor="project-title" className="project-title">
                  Project Name
                </label>
                {!saved ? <input type="text" id="project-title"  name="fullName" value={projects.name} 
                    onChange={e => {
                        setProjects({...projects, title: e.target.value})
                        handleAddedInfo({...projects, title: e.target.value})
                        }} /> : <span></span>}
              </div>
              <div className="description">
                <label
                  htmlFor="project-description"
                  className="project-description"
                >
                  Description
                </label>
                {!saved ? <textarea type="text" id="project-description"  name="fullName" value={projects.name} 
                    onChange={e => {
                        setProjects({...projects, projectDescription: e.target.value})
                        handleAddedInfo({...projects, projectDescription: e.target.value})
                        }} /> : <span></span>}
            </div>
            <button type="submit">{!saved ? "Save" : "Edit"}</button>
        </form>
    )
}