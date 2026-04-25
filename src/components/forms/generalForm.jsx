
import { ThemeUpdateContext } from '../themeContext.jsx'
import { useContext } from 'react';
    


export function GeneralForm() {
    let handleAddedInfo = useContext(ThemeUpdateContext)
    
    function handleSave(e) {
        const name = e.get("fullName") 
        const phone = e.get("phone")
        const email = e.get("email")
        handleAddedInfo({name: name, phone: phone, email: email})
    }


    return (
        <>
        <form action={handleSave} className="inputForm">
            <h2>General Information:</h2>
            <div>
                <label htmlFor="fullName">Full Name</label>
                <input type="text" id="fullName" name="fullName" />
            </div>
            <div>
                <label htmlFor="phone">Phone</label>
                <input type="text" id="phone"  name="phone"/>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" id="email" name="email"/>
            </div>
            <button type="submit">Save</button>
        </form>
        </>
        )
}