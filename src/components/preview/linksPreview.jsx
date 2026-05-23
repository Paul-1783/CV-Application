export function LinksPreview({git, linkedinProfile, xingProfile}){
    return(
        <>
            <div className="form-preview" id="links-preview">
                <div>
                    <span>Git: </span><span>{git}</span>
                </div>
                <div>
                    <span>Linkedin: </span><span>{linkedinProfile}</span>
                </div>
                <div>
                    <span>Xing: </span><span>{xingProfile}</span>
                </div> 
            </div>   
        </>
    )
}