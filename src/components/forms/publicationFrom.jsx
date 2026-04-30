
import { ThemeContext, ThemeUpdateContext } from '../themeContext.jsx'
import { useContext, useState} from 'react';
    

export function PublicationForm(){

      const [saved, setSaved] = useState(false)
      const [publications, setPublications] = useState({formTopic: "publication", publicationTitle:"", journalName:"", publicationDate:""})

      let handleAddedInfo = useContext(ThemeUpdateContext)
      let allInformation = useContext(ThemeContext)
  
      function handleClick(e) {
          if(!saved){
              const name = e.get("fullName") 
              const phone = e.get("phone")
              const email = e.get("email")
              handleAddedInfo(publications)
          }  
          setSaved(previousState => !previousState)        
      }
  
    return(
        <form  action={handleClick} className="inputForm">
            <h2>Publications:</h2>
            <div className="title">
                <label
                  htmlFor="publication-title"
                  className="publication-title"
                >
                  Title
                </label>
                {!saved ? <input type="text" id="publication-title" name="publicationTitle" value={publications.publicationTitle}
                    onChange={e => {
                        setPublications({...publications, publicationTitle: e.target.value})
                        handleAddedInfo({...publications, publicationTitle: e.target.value})
                        }} /> : <span></span>}
              </div>
              <div className="journal">
                <label htmlFor="journal-name" className="journal-name">
                  Journal
                </label>
                {!saved ? <input type="text" id="journal-name" name="journalName" value={publications.journalName}
                    onChange={e => {
                        setPublications({...publications, journalName: e.target.value})
                        handleAddedInfo({...publications, journalName: e.target.value})
                        }} /> : <span></span>}
              </div>
              <div className="date">
                <label htmlFor="publication-date" className="publication-date">
                  Date
                </label>
                {!saved ? <input type="text" id="publication-date" name="publicationDate" value={publications.phone}
                    onChange={e => {
                        setPublications({...publications, publicationDate: e.target.value})
                        handleAddedInfo({...publications, publicationDate: e.target.value})
                        }} /> : <span></span>}
              </div>
            <button type="submit">{!saved ? "Save" : "Edit"}</button>
        </form>
    )
}