export function ExperiencePreview({companyName, jobTitle, address, descriptionTitle}){
    return (
        <>
            <div>
                <span>companyName: </span><span>{companyName}</span>
            </div>
            <div>
                <span>jobTitle: </span><span>{jobTitle}</span>
            </div>
            <div>
                <span>address: </span><span>{address}</span>
            </div>
            <div>
                <span>descriptionTitle: </span><span>{descriptionTitle}</span>
            </div>
        </>
    )
}