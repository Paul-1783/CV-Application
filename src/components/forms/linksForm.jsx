
import { ThemeContext, ThemeUpdateContext } from '../themeContext.jsx'
import { useContext, useState} from 'react';
    

export function LinkForm({currentLinks, setCurrentLinks}){

      const [saved, setSaved] = useState(false)
  
      let handleAddedInfo = useContext(ThemeUpdateContext)
      let allInformation = useContext(ThemeContext)
  
      function handleClick(e) {
          if(!saved){
              const name = e.get("fullName") 
              const phone = e.get("phone")
              const email = e.get("email")
              handleAddedInfo(currentLinks)
          }  
          setSaved(previousState => !previousState)        
      }
  

    return(
        <form className="inputForm">
            <h2>Links:</h2>
            <div className="linkedin">
                <label htmlFor="linkedin-profile" className="linkedin-profile">
                  Linkedin
                </label>
                <input type="text" id="linkedin-profile" />
              </div>
              <div className="xing">
                <label htmlFor="xing-profile" className="xing-profile">
                  Xing
                </label>
                <input type="text" id="xing-profile" />
              </div>
              <div className="git">
                <label htmlFor="git-profile" className="git-profile">
                  Git
                </label>
                <input type="text" id="git-profile" />
              </div>
            <button type="submit">{!saved ? "Save" : "Edit"}</button>
        </form>
    )
}