export function ProjectsPreview({title, projectDescription}){
    return (
        <>
            <div className="form-preview">
                <div>
                    <span>Project Title: </span><span>{title}</span>
                </div>
                <div>
                    <span>Project Description: </span><span>{projectDescription}</span>
                </div>
            </div>
        </>
    )
}