
import { ThemeUpdateContext } from '../themeContext.jsx'
import { useContext , useState} from 'react';
    

export function EducationForm(){

    const [saved, setSaved] = useState(false)
     
    let handleAddedInfo = useContext(ThemeUpdateContext)
    
    function handleClick(e) {
        if(!saved){
            const name = e.get("fullName") 
            const phone = e.get("phone")
            const email = e.get("email")
            handleAddedInfo({name: name, phone: phone, email: email, formTopic  : "general"})
        }  
        setSaved(previousState => !previousState)        
    }
    // console.log("test it: ")

    return(
        <form className="inputForm">
            <h2>Education:</h2>
            <div>
                <label htmlFor="fullName">Full Name</label>
                <input type="text" id="fullName" />
            </div>
            <div>
                <label htmlFor="phone">Phone</label>
                <input type="text" id="phone" />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" id="email" />
            </div>
        </form>
    )
}