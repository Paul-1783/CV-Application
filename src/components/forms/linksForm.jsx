
import { ThemeContext, ThemeUpdateContext } from '../themeContext.jsx'
import { useContext, useState} from 'react';
    

export function LinkForm(){

      const [saved, setSaved] = useState(false)
      const [currentLinks, setCurrentLinks] = useState({formTopic: "links", fullName:"", linkedinProfile:"", xingProfile:""})

      let handleAddedInfo = useContext(ThemeUpdateContext)
      let allInformation = useContext(ThemeContext)
  
      function handleClick(e) {
          if(!saved)
              handleAddedInfo(currentLinks)
          setSaved(previousState => !previousState)        
      }
  

    return(
        <form  action={handleClick} className="inputForm">
            <h2>Links:</h2>
            <div className="linkedin">
                <label htmlFor="linkedin-profile" className="linkedin-profile">
                  Linkedin
                </label>
                 {!saved ? <input type="text" id="linkedin-profile"  name="linkedinProfile" value={currentLinks.linkedinProfile} 
                    onChange={e => {
                        setCurrentLinks({...currentLinks, linkedinProfile: e.target.value})
                        handleAddedInfo({...currentLinks, linkedinProfile: e.target.value})
                        }} /> : <span></span>}
              </div>
              <div className="xing">
                <label htmlFor="xing-profile" className="xing-profile">
                  Xing
                </label>
                 {!saved ? <input type="text" id="xing-profile"  name="xingProfile" value={currentLinks.xingProfile} 
                    onChange={e => {
                        setCurrentLinks({...currentLinks, xingProfile: e.target.value})
                        handleAddedInfo({...currentLinks, xingProfile: e.target.value})
                        }} /> : <span></span>}
              </div>
              <div className="git">
                <label htmlFor="git-profile" className="git-profile">
                  Git
                </label>
                 {!saved ? <input type="text" id="git-profile"  name="fullName" value={currentLinks.fullName} 
                    onChange={e => {
                        setCurrentLinks({...currentLinks, fullName: e.target.value})
                        handleAddedInfo({...currentLinks, fullName: e.target.value})
                        }} /> : <span></span>}
              </div>
            <button type="submit">{!saved ? "Save" : "Edit"}</button>
        </form>
    )
}