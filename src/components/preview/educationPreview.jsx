export function EducationPreview({school, degree, start, end, location}) {
    return (
        <>
            <div>
                <span>school: </span><span>{school}</span>
            </div>
            <div>
                <span>degree: </span><span>{degree}</span>
            </div>
            <div>
                <span>start: </span><span>{start}</span>
            </div>
            <div>
                <span>end: </span><span>{end}</span>
            </div>
            <div>
                <span>location: </span><span>{location}</span>
            </div>
        </>
    )
}