import { ThemeContext, ThemeUpdateContext } from '../themeContext.jsx'
import { useContext, useState} from 'react';
    
export function ExperienceForm({currentExperienceInfo, setCurrentExperienceInfo}){

      const [saved, setSaved] = useState(false)
  
      let handleAddedInfo = useContext(ThemeUpdateContext)
      let allInformation = useContext(ThemeContext)
  
      function handleClick(e) {
          if(!saved){
              const name = e.get("fullName") 
              const phone = e.get("phone")
              const email = e.get("email")
              handleAddedInfo(currentExperienceInfo)
          }  
          setSaved(previousState => !previousState)        
      }
  

    return(
        <form action="" className="inputForm">
            <h2>Experience:</h2>
              <div className="company">
                <label htmlFor="company-name" className="company-name">
                  Company Name
                </label>
                <input type="text" id="company-name" />
              </div>
              <div className="job">
                <label htmlFor="job-title" className="job-title">
                  Job Title
                </label>
                <input type="text" id="job-title" />
              </div>
              <div className="address">
                <label htmlFor="address-name" className="address-name">
                  Address
                </label>
                <input type="text" id="address-name" />
              </div>
              <div className="description">
                <label
                  htmlFor="description-title"
                  className="description-title"
                >
                  Description
                </label>
                <textarea
                  name="description-title"
                  id="description-title"
                ></textarea>
              </div>
              <button type="submit">{!saved ? "Save" : "Edit"}</button>
        </form>
    )
}