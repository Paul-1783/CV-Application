export function LinksPreview({fullName, linkedinProfile, xingProfile}){
    return(
        <>
             <div>
                <span>Full Name: </span><span>{fullName}</span>
            </div>
            <div>
                <span>Linkedin: </span><span>{linkedinProfile}</span>
            </div>
            <div>
                <span>Xing: </span><span>{xingProfile}</span>
            </div>    
        </>
    )
}