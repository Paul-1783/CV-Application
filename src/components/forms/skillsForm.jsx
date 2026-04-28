import { ThemeContext, ThemeUpdateContext } from '../themeContext.jsx'
import { useContext, useState} from 'react';
    
export function SkillForm({skillSet, setSkillSet}){

      const [saved, setSaved] = useState(false)
  
      let handleAddedInfo = useContext(ThemeUpdateContext)
      let allInformation = useContext(ThemeContext)
  
      function handleClick(e) {
          if(!saved)
              handleAddedInfo(skillSet)
          setSaved(previousState => !previousState)        
      }
  
    return(
        <form  action={handleClick} className="inputForm">
            <h2>Skills:</h2>
            <div className="theory">
                <label
                  htmlFor="theoretical-knowledge"
                  className="theoretical-knowledge"
                >
                  Concepts
                </label>
                {!saved ? <input type="text" id="theoretical-knowledge"  name="theoreticalKnowledge" value={skillSet.theoreticalKnowledge} 
                    onChange={e => {
                        setSkillSet({...skillSet, theoreticalKnowledge: e.target.value})
                        handleAddedInfo({...skillSet, theoreticalKnowledge: e.target.value})
                        }} /> : <span></span>}
              </div>
              <div className="programming">
                <label
                  htmlFor="programming-languages"
                  className="programming-languages"
                >
                  programming languages
                </label>
                {!saved ? <input type="text" id="programming-languages"  name="programmingLanguages" value={skillSet.programmingLanguages} 
                    onChange={e => {
                        setSkillSet({...skillSet, programmingLanguages: e.target.value})
                        handleAddedInfo({...skillSet, programmingLanguages: e.target.value})
                        }} /> : <span></span>}
              </div>
              <div className="framework">
                <label htmlFor="framework-name" className="framework-name">
                  Framework/Library
                </label>
                {!saved ? <input type="text" id="framwork-name"  name="framworkName" value={skillSet.framworkName} 
                    onChange={e => {
                        setSkillSet({...skillSet, framworkName: e.target.value})
                        handleAddedInfo({...skillSet, framworkName: e.target.value})
                        }} /> : <span></span>}
              </div>
            <button type="submit">{!saved ? "Save" : "Edit"}</button>
        </form>
    )
}