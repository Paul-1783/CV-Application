
import { ThemeContext, ThemeUpdateContext } from '../themeContext.jsx'
import { useContext, useState} from 'react';


export function LanguageForm({currentLanguageInfo, setLanguageInfo}){
    const [saved, setSaved] = useState(false)

    let handleAddedInfo = useContext(ThemeUpdateContext)
    let allInformation = useContext(ThemeContext)

    function handleClick(e) {
        if(!saved){
            const languageName = e.get("language-name") 
            const languageLevel = e.get("language-level")
            handleAddedInfo(currentLanguageInfo)
        }  
        setSaved(previousState => !previousState)        
    }


    return(
        <form  action={handleClick} className="inputForm">
            <h2>Languages:</h2>
            <div className="name">
                <label htmlFor="language-name" className="language-name">
                  Name
                </label>
                {!saved ? <input type="text" id="language-name" name="language-name"  onChange={e => {
                        setLanguageInfo({...currentLanguageInfo, languageName: e.target.value})
                        handleAddedInfo({...currentLanguageInfo, languageName: e.target.value})
                        }} /> : <span></span>}
            </div>
            <div className="level">
                <label htmlFor="language-level" className="language-level">
                  Level
                </label>
                 {!saved ? <input type="text" id="language-level"  name="language-level" onChange={e => {
                        setLanguageInfo({...currentLanguageInfo, languageLevel: e.target.value})
                        handleAddedInfo({...currentLanguageInfo, languageLevel: e.target.value})
                        }} /> : <span></span>}
              </div>
            <button type="submit">{!saved ? "Save" : "Edit"}</button>
        </form>
    )
}