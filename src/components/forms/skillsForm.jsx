import { ThemeContext, ThemeUpdateContext } from '../themeContext.jsx'
import { useContext, useState} from 'react';
    
export function SkillForm({skillSet, setSkillSet}){

      const [saved, setSaved] = useState(false)
  
      let handleAddedInfo = useContext(ThemeUpdateContext)
      let allInformation = useContext(ThemeContext)
  
      function handleClick(e) {
          if(!saved){
              const name = e.get("fullName") 
              const phone = e.get("phone")
              const email = e.get("email")
              handleAddedInfo(skillSet)
          }  
          setSaved(previousState => !previousState)        
      }
  
    return(
        <form className="inputForm">
            <h2>Skills:</h2>
            <div className="theory">
                <label
                  htmlFor="theoretical-knowledge"
                  className="theoretical-knowledge"
                >
                  Concepts
                </label>
                <input type="text" id="theoretical-knowledge" />
              </div>
              <div className="programming">
                <label
                  htmlFor="programming-languages"
                  className="programming-languages"
                >
                  programming languages
                </label>
                <input type="text" id="programming-languages" />
              </div>
              <div className="framework">
                <label htmlFor="framework-name" className="framework-name">
                  Framework/Library
                </label>
                <input type="text" id="framwork-name" />
              </div>
            <button type="submit">{!saved ? "Save" : "Edit"}</button>
        </form>
    )
}