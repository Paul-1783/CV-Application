
export function GeneralForm(){
    return(
        <form className="inputForm">
            <h2>General Information:</h2>
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