import { ThemeUpdateContext } from '../themeContext.jsx'
import { useContext , useState} from 'react';
    
export function EducationForm({currentEducationInfo, setCurrentEducactionInfo}){

    const [saved, setSaved] = useState(false)
     
    let handleAddedInfo = useContext(ThemeUpdateContext)
    
    function handleClick(e) {
        if(!saved){
            const name = e.get("fullName") 
            const phone = e.get("phone")
            const email = e.get("email")
            handleAddedInfo(currentEducationInfo)
        }  
        setSaved(previousState => !previousState)        
    }
    // console.log("test it: ")

    return(
        <form className="inputForm">
            <h2>Education:</h2>
            <div className="school">
                <label htmlFor="school-name" className="school-name">
                  School
                </label>
                <input type="text" id="school-name" />
              </div>
              <div className="degree">
                <label htmlFor="degree-name" className="degree-name">
                  Degree
                </label>
                <input type="text" id="degree-name" />
              </div>
              <div className="start">
                <label htmlFor="start-date" className="start-date">
                  Start
                </label>
                <input type="text" id="start-date" />
              </div>
              <div className="end">
                <label htmlFor="end-date" className="end-date">
                  End
                </label>
                <input type="text" id="end-date" />
              </div>
              <div className="location">
                <label htmlFor="location-name" className="location-name">
                  Location of the school
                </label>
                <input type="text" id="location-name" />
              </div>
            <button type="submit">{!saved ? "Save" : "Edit"}</button>
        </form>
    )
}