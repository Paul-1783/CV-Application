
import { ThemeContext, ThemeUpdateContext } from '../themeContext.jsx'
import { useContext, useState} from 'react';
    

export function ProjectForm({projects, setProjects}){

      const [saved, setSaved] = useState(false)
  
      let handleAddedInfo = useContext(ThemeUpdateContext)
      let allInformation = useContext(ThemeContext)
  
      function handleClick(e) {
          if(!saved){
              const name = e.get("fullName") 
              const phone = e.get("phone")
              const email = e.get("email")
              handleAddedInfo(projects)
          }  
          setSaved(previousState => !previousState)        
      }
  
    return(
        <form className="inputForm">
            <h2>Projects:</h2>
            <div className="title">
                <label htmlFor="project-title" className="project-title">
                  Project Name
                </label>
                <input type="text" id="project-title" />
              </div>
              <div className="description">
                <label
                  htmlFor="project-description"
                  className="project-description"
                >
                  Description
                </label>
                <textarea type="text" id="project-description" />
            </div>
            <button type="submit">{!saved ? "Save" : "Edit"}</button>
        </form>
    )
}