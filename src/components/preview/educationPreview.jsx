export function EducationPreview({school, degree, start, end, location}) {
    return (
        <>
         <div className="form-preview">
            <div>
                <span>School: </span><span>{school}</span>
            </div>
            <div>
                <span>Degree: </span><span>{degree}</span>
            </div>
            <div>
                <span>Start: </span><span>{start}</span>
            </div>
            <div>
                <span>End: </span><span>{end}</span>
            </div>
            <div>
                <span>Location: </span><span>{location}</span>
            </div>
         </div>
        </>
    )
}