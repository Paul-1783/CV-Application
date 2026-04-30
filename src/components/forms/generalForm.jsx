
import { ThemeContext, ThemeUpdateContext } from '../themeContext.jsx'
import { useContext, useState} from 'react';
    

export function GeneralForm() {
    const [saved, setSaved] = useState(false)
    const [currentGeneralInfo, setCurrentGeneralInfo] = useState({formTopic: "general", name:"", phone:"", email:""})


    let handleAddedInfo = useContext(ThemeUpdateContext)
    let allInformation = useContext(ThemeContext)

    function handleClick(e) {
        if(!saved)
            handleAddedInfo(currentGeneralInfo)
        setSaved(previousState => !previousState)        
    }
    console.log("IN GENERAL ")
    return (
        <>
            <form action={handleClick} className="inputForm">
                <h2>General Information:</h2>
                <div>
                    <label htmlFor="fullName">Full Name</label>
                    {!saved ? <input type="text" id="fullName" name="fullName" value={currentGeneralInfo.name} 
                    onChange={e => {
                        setCurrentGeneralInfo({...currentGeneralInfo, name: e.target.value})
                        handleAddedInfo({...currentGeneralInfo, name: e.target.value})
                        }} /> : <span></span>}
                </div>
                <div>
                    <label htmlFor="phone">Phone</label>
                    {!saved ? <input type="text" id="phone"  name="phone" value={currentGeneralInfo.phone}
                    onChange={e => {
                        setCurrentGeneralInfo({...currentGeneralInfo, phone: e.target.value})
                        handleAddedInfo({...currentGeneralInfo, phone: e.target.value})
                        }} /> : <span></span>}
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    {!saved ? <input type="text" id="email" name="email" value={currentGeneralInfo.email} 
                    onChange={e => {
                        setCurrentGeneralInfo({...currentGeneralInfo, email: e.target.value})
                        handleAddedInfo({...currentGeneralInfo, email: e.target.value})
                        }}/> : <span></span>}
                </div>
                <button type="submit">{!saved ? "Save" : "Edit"}</button>
            </form>
        </>
        )
}