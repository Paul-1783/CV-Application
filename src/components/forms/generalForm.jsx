
import { ThemeContext, ThemeUpdateContext } from '../themeContext.jsx'
import { useContext, useState} from 'react';
    

export function GeneralForm() {
    const [saved, setSaved] = useState(false)

    let handleAddedInfo = useContext(ThemeUpdateContext)
    let allInformation = useContext(ThemeContext)

    function handleClick(e) {
        if(!saved){
            const name = e.get("fullName") 
            const phone = e.get("phone")
            const email = e.get("email")
            handleAddedInfo({name: name, phone: phone, email: email, formTopic  : "general"})
        }  
        setSaved(previousState => !previousState)        
    }

    // console.log("test it: ", allInformation  || null)

    return (
        <>
        <form action={handleClick} className="inputForm">
            <h2>General Information:</h2>
            <div>
                <label htmlFor="fullName">Full Name</label>
                {!saved ? <input type="text" id="fullName" name="fullName" /> : <span></span>}
            </div>
            <div>
                <label htmlFor="phone">Phone</label>
                <input type="text" id="phone"  name="phone" value={allInformation.filter(info => info.formTopic === "general").phone}
                 onChange={e => handleAddedInfo(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" id="email" name="email"/>
            </div>
            <button type="submit">{!saved ? "Save" : "Edit"}</button>
        </form>
        </>
        )
}