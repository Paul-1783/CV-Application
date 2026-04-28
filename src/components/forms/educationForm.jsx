import { ThemeUpdateContext } from '../themeContext.jsx'
import { useContext , useState} from 'react';
    
export function EducationForm({currentEducationInfo, setCurrentEducationInfo}){

    const [saved, setSaved] = useState(false)
     
    let handleAddedInfo = useContext(ThemeUpdateContext)
    
    function handleClick(e) {
        if(!saved)
            handleAddedInfo(currentEducationInfo)
        setSaved(previousState => !previousState)        
    } 

    return(
        <form  action={handleClick} className="inputForm">
            <h2>Education:</h2>
            <div className="school">
                <label htmlFor="school-name" className="school-name">
                  School
                </label>
                {!saved ? <input type="text" id="school-name"  name="school-name" value={currentEducationInfo.school} 
                    onChange={e => {
                        setCurrentEducationInfo({...currentEducationInfo, school: e.target.value})
                        handleAddedInfo({...currentEducationInfo, school: e.target.value})
                        }} /> : <span></span>}
              </div>
              <div className="degree">
                <label htmlFor="degree-name" className="degree-name">
                  Degree
                </label>
                {!saved ? <input type="text" id="degree-name"  name="degree-name" value={currentEducationInfo.degree} 
                    onChange={e => {
                        setCurrentEducationInfo({...currentEducationInfo, degree: e.target.value})
                        handleAddedInfo({...currentEducationInfo, degree: e.target.value})
                        }} /> : <span></span>}
              </div>
              <div className="start">
                <label htmlFor="start-date" className="start-date">
                  Start
                </label>
                {!saved ? <input type="text" id="start-date"  name="start-date" value={currentEducationInfo.start} 
                    onChange={e => {
                        setCurrentEducationInfo({...currentEducationInfo, start: e.target.value})
                        handleAddedInfo({...currentEducationInfo, start: e.target.value})
                        }} /> : <span></span>}
              </div>
              <div className="end">
                <label htmlFor="end-date" className="end-date">
                  End
                </label>
                {!saved ? <input type="text" id="end-date" name="end-date" value={currentEducationInfo.end} 
                    onChange={e => {
                        setCurrentEducationInfo({...currentEducationInfo, end: e.target.value})
                        handleAddedInfo({...currentEducationInfo, end: e.target.value})
                        }} /> : <span></span>}
              </div>
              <div className="location">
                <label htmlFor="location-name" className="location-name">
                  Location of the school
                </label>
                {!saved ? <input type="text" id="location-name" name="location-name" value={currentEducationInfo.location} 
                    onChange={e => {
                        setCurrentEducationInfo({...currentEducationInfo, location: e.target.value})
                        handleAddedInfo({...currentEducationInfo, location: e.target.value})
                        }} /> : <span></span>}
              </div>
            <button type="submit">{!saved ? "Save" : "Edit"}</button>
        </form>
    )
}