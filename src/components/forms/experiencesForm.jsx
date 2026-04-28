import { ThemeContext, ThemeUpdateContext } from '../themeContext.jsx'
import { useContext, useState} from 'react';
    
export function ExperienceForm({currentExperienceInfo, setCurrentExperienceInfo}){

      const [saved, setSaved] = useState(false)
  
      let handleAddedInfo = useContext(ThemeUpdateContext)
      let allInformation = useContext(ThemeContext)
  
      function handleClick(e) {
          if(!saved)
              handleAddedInfo(currentExperienceInfo)
          setSaved(previousState => !previousState)        
      }
  

    return(
        <form  action={handleClick} className="inputForm">
            <h2>Experience:</h2>
              <div className="company">
                <label htmlFor="company-name" className="company-name">
                  Company Name
                </label>
                {!saved ? <input type="text" id="company-name" name="company-name" value={currentExperienceInfo.companyName} 
                    onChange={e => {
                        setCurrentExperienceInfo({...currentExperienceInfo, companyName: e.target.value})
                        handleAddedInfo({...currentExperienceInfo, companyName: e.target.value})
                        }} /> : <span></span>}
              </div>
              <div className="job">
                <label htmlFor="job-title" className="job-title">
                  Job Title
                </label>
                {!saved ? <input type="text" id="job-title" name="job-title" value={currentExperienceInfo.jobTitle} 
                    onChange={e => {
                        setCurrentExperienceInfo({...currentExperienceInfo, jobTitle: e.target.value})
                        handleAddedInfo({...currentExperienceInfo, jobTitle: e.target.value})
                        }} /> : <span></span>}
              </div>
              <div className="address">
                <label htmlFor="address-name" className="address-name">
                  Address
                </label>
                {!saved ? <input type="text" id="address-name"  name="address-name" value={currentExperienceInfo.address} 
                    onChange={e => {
                        setCurrentExperienceInfo({...currentExperienceInfo, address: e.target.value})
                        handleAddedInfo({...currentExperienceInfo, address: e.target.value})
                        }} /> : <span></span>}
              </div>
              <div className="description">
                <label
                  htmlFor="description-title"
                  className="description-title"
                >
                  Description
                </label>
                {!saved ? <textarea
                  name="description-title"
                  id="description-title"
                value={currentExperienceInfo.descriptionTitle} 
                    onChange={e => {
                        setCurrentExperienceInfo({...currentExperienceInfo, descriptionTitle: e.target.value})
                        handleAddedInfo({...currentExperienceInfo, descriptionTitle: e.target.value})
                        }} /> : <span></span>}
              </div>
              <button type="submit">{!saved ? "Save" : "Edit"}</button>
        </form>
    )
}