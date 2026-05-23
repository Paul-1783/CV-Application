export function ExperiencePreview({companyName, jobTitle, address, descriptionTitle}){
    return (
        <>
            <div className="form-preview">
                <div>
                    <span>Company Name: </span><span>{companyName}</span>
                </div>
                <div>
                    <span>Job Title: </span><span>{jobTitle}</span>
                </div>
                <div>
                    <span>Address: </span><span>{address}</span>
                </div>
                <div>
                    <span>Description: </span><span>{descriptionTitle}</span>
                </div>
            </div>
        </>
    )
}