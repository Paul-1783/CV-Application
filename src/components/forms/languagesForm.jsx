
import { ThemeContext, ThemeUpdateContext } from '../themeContext.jsx'
import { useContext, useState} from 'react';


export function LanguageForm({currentLanguageInfo, setLanguageInfo}){
    const [saved, setSaved] = useState(false)

    let handleAddedInfo = useContext(ThemeUpdateContext)
    let allInformation = useContext(ThemeContext)

    function handleClick(e) {
        if(!saved){
            const name = e.get("fullName") 
            const phone = e.get("phone")
            const email = e.get("email")
            handleAddedInfo(currentLanguageInfo)
        }  
        setSaved(previousState => !previousState)        
    }


    return(
        <form className="inputForm">
            <h2>Languages:</h2>
            <div className="name">
                <label htmlFor="language-name" className="language-name">
                  Name
                </label>
                <input type="text" id="language-name" />
            </div>
            <div className="level">
                <label htmlFor="language-level" className="language-level">
                  Level
                </label>
                <input type="text" id="language-level" />
              </div>
            <button type="submit">{!saved ? "Save" : "Edit"}</button>
        </form>
    )
}